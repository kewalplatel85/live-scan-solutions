import { OAuth2Client } from 'google-auth-library';

export const dynamic = 'force-dynamic';

export const GET = async (req) => {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    return Response.json({ error: `OAuth error: ${error}` }, { status: 400 });
  }
  if (!code) {
    return Response.json({ error: 'Missing ?code=' }, { status: 400 });
  }

  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return Response.json(
      { error: 'Missing GOOGLE_OAUTH_CLIENT_ID/SECRET/REDIRECT_URI env vars' },
      { status: 500 }
    );
  }

  const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);

  const { tokens } = await oauth2Client.getToken(code);

  // IMPORTANT:
  // - refresh_token is often returned ONLY the first time user grants consent
  // - you should copy refresh_token and put into Vercel env var: GOOGLE_REFRESH_TOKEN
  return Response.json(
    {
      ok: true,
      message:
        'Copy refresh_token (if present) into GOOGLE_REFRESH_TOKEN in Vercel env vars. Then redeploy.',
      tokens: {
        refresh_token: tokens.refresh_token || null,
        access_token_present: Boolean(tokens.access_token),
        scope: tokens.scope || null,
        token_type: tokens.token_type || null,
        expiry_date: tokens.expiry_date || null,
      },
    },
    { status: 200 }
  );
};
