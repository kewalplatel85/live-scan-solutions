import { OAuth2Client } from 'google-auth-library';

export const dynamic = 'force-dynamic';

const getAccessToken = async () => {
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI;

  if (!refreshToken) throw new Error('Missing GOOGLE_REFRESH_TOKEN env var');
  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error(
      'Missing GOOGLE_OAUTH_CLIENT_ID/SECRET/REDIRECT_URI env vars'
    );
  }

  const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  const { token } = await oauth2Client.getAccessToken();
  if (!token) throw new Error('Failed to get access token from refresh token');

  return token;
};

export const GET = async (req) => {
  try {
    const accessToken = await getAccessToken();

    // Optional filter: /api/google/gbp/discover?query=mail%20all
    const { searchParams } = new URL(req.url);
    const query = (searchParams.get('query') || '').toLowerCase();

    // 1) List accounts
    const accountsResp = await fetch(
      'https://mybusinessaccountmanagement.googleapis.com/v1/accounts',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    if (!accountsResp.ok) {
      const text = await accountsResp.text();
      return Response.json(
        { error: 'Accounts list failed', details: text },
        { status: accountsResp.status }
      );
    }

    const accountsData = await accountsResp.json();
    const accounts = accountsData.accounts || [];

    // 2) For each account, list locations (can be paginated)
    const results = [];

    for (const acc of accounts) {
      const accountName = acc.name; // e.g., "accounts/123456789"
      const accountId = accountName?.split('/')[1];

      if (!accountId) continue;

      let pageToken = null;
      const locations = [];

      for (let i = 0; i < 20; i++) {
        const url = new URL(
          `https://mybusinessbusinessinformation.googleapis.com/v1/${accountName}/locations`
        );
        url.searchParams.set('pageSize', '100');
        // Ask for minimal fields that help identify the correct location
        url.searchParams.set(
          'readMask',
          'name,title,storefrontAddress,metadata'
        );
        if (pageToken) url.searchParams.set('pageToken', pageToken);

        const locResp = await fetch(url, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (!locResp.ok) {
          const text = await locResp.text();
          return Response.json(
            { error: 'Locations list failed', accountName, details: text },
            { status: locResp.status }
          );
        }

        const locData = await locResp.json();
        const batch = locData.locations || [];

        for (const loc of batch) {
          const title = (loc.title || '').toLowerCase();
          const addr = [
            loc.storefrontAddress?.addressLines?.join(' ') || '',
            loc.storefrontAddress?.locality || '',
            loc.storefrontAddress?.administrativeArea || '',
            loc.storefrontAddress?.postalCode || '',
          ]
            .join(' ')
            .toLowerCase();

          const matches =
            !query || title.includes(query) || addr.includes(query);
          if (matches) {
            locations.push({
              locationName: loc.name, // e.g., "locations/987654321" OR "accounts/.../locations/..."
              title: loc.title || null,
              address: loc.storefrontAddress || null,
              verified: loc.metadata?.hasVoiceOfMerchant === true ? true : null,
            });
          }
        }

        pageToken = locData.nextPageToken;
        if (!pageToken) break;
      }

      results.push({
        accountName,
        accountId,
        accountDisplayName: acc.accountName || null,
        locations,
      });
    }

    return Response.json(
      {
        ok: true,
        message:
          "Pick the correct accountId and locationId. Set GBP_ACCOUNT_ID and GBP_LOCATION_ID env vars. locationId is the numeric part after 'locations/'.",
        queryUsed: query || null,
        results,
      },
      { status: 200 }
    );
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
};
