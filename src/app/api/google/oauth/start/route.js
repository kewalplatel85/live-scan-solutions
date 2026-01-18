import { OAuth2Client } from 'google-auth-library';

export const dynamic = 'force-dynamic';

export const GET = async () => {
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

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // to receive refresh_token
    prompt: 'consent', // ensures refresh_token on first consent
    scope: ['https://www.googleapis.com/auth/business.manage'],
  });

  return Response.redirect(url);
};
