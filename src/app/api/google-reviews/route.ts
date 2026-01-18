// import { NextResponse } from 'next/server';

// type GoogleReview = {
//   author_name: string;
//   author_url?: string;
//   profile_photo_url?: string;
//   rating: number;
//   relative_time_description?: string;
//   text: string;
//   time?: number;
// };

// export async function GET() {
//   const key = process.env.GOOGLE_MAPS_API_KEY;
//   const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

//   console.log('[Google Reviews API] Environment check:', {
//     hasApiKey: !!key,
//     hasPlaceId: !!placeId,
//     placeId: placeId ? `${placeId.substring(0, 10)}...` : 'NOT SET',
//   });

//   if (!key || !placeId) {
//     console.error('[Google Reviews API] Missing environment variables');
//     return NextResponse.json(
//       {
//         error: 'Missing API configuration',
//         details: {
//           hasApiKey: !!key,
//           hasPlaceId: !!placeId,
//         },
//       },
//       { status: 500 }
//     );
//   }

//   // Request only what we need (keeps payload small = cheaper/faster)
//   const fields = [
//     'name',
//     'place_id',
//     'url',
//     'rating',
//     'user_ratings_total',
//     'editorial_summary',
//     'reviews',
//   ].join('%2C');

//   const url =
//     `https://maps.googleapis.com/maps/api/place/details/json` +
//     `?place_id=${encodeURIComponent(placeId)}` +
//     `&fields=${fields}` +
//     `&reviews_sort=newest` + // newest first (still max 5)
//     `&key=${key}`;

//   try {
//     console.log('[Google Reviews API] Fetching from Google Places API...');

//     const resp = await fetch(url, {
//       // Cache on the server for 6 hours; refresh in background
//       next: { revalidate: 60 * 60 * 6 },
//     });

//     console.log('[Google Reviews API] Response status:', resp.status);

//     if (!resp.ok) {
//       const errorText = await resp.text();
//       console.error('[Google Reviews API] HTTP error:', resp.status, errorText);
//       return NextResponse.json(
//         { error: 'Google API error', status: resp.status },
//         { status: 502 }
//       );
//     }

//     const data = await resp.json();
//     console.log(
//       '[Google Reviews API] Response status from Google:',
//       data.status
//     );

//     if (data.status !== 'OK' || !data.result) {
//       console.error(
//         '[Google Reviews API] Google Places API error:',
//         data.status,
//         data.error_message
//       );
//       return NextResponse.json(
//         {
//           error: data.status || 'No result',
//           details: data.error_message || 'Unknown error from Google API',
//         },
//         { status: 502 }
//       );
//     }

//     console.log(
//       '[Google Reviews API] Success! Reviews count:',
//       data.result.reviews?.length || 0
//     );

//     const r = data.result;

//     // Normalize + trim to the essentials you'll render
//     const reviews: GoogleReview[] = Array.isArray(r.reviews)
//       ? r.reviews.map((rev: GoogleReview) => ({
//           author_name: rev?.author_name,
//           author_url: rev?.author_url,
//           profile_photo_url: rev?.profile_photo_url,
//           rating: rev?.rating,
//           relative_time_description: rev?.relative_time_description,
//           text: rev?.text,
//           time: rev?.time,
//         }))
//       : [];

//     const payload = {
//       name: r.name as string,
//       place_id: r.place_id as string | undefined,
//       url: r.url as string | undefined,
//       rating: r.rating as number | undefined,
//       user_ratings_total: r.user_ratings_total as number | undefined,
//       editorial_summary: r.editorial_summary?.overview as string | undefined,
//       html_attributions: data.html_attributions as string[] | undefined,
//       reviews: reviews.slice(0, 5),
//     };

//     const res = NextResponse.json(payload);
//     // Helpful for Vercel's CDN
//     res.headers.set(
//       'Cache-Control',
//       's-maxage=21600, stale-while-revalidate=86400'
//     );
//     return res;
//   } catch {
//     return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
//   }
// }

import { OAuth2Client } from 'google-auth-library';

export const revalidate = 21600; // cache 6 hours on Vercel (60 * 60 * 6)
export const dynamic = 'force-dynamic';

const getAccessToken = async () => {
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI;

  console.log('<> refreshToken', refreshToken);
  if (!refreshToken) throw new Error('Missing GOOGLE_REFRESH_TOKEN env var');
  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error(
      'Missing GOOGLE_OAUTH_CLIENT_ID/SECRET/REDIRECT_URI env vars'
    );
  }

  const oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);
  console.log('<> oauth2Client', oauth2Client);
  oauth2Client.setCredentials({ refresh_token: refreshToken });

  const { token } = await oauth2Client.getAccessToken();
  console.log('<> token', token);
  if (!token) throw new Error('Failed to get access token');

  return token;
};

export const GET = async () => {
  try {
    const accountId = process.env.GBP_ACCOUNT_ID;
    const locationId = process.env.GBP_LOCATION_ID;

    // if (!accountId || !locationId) {
    if (!locationId) {
      return Response.json(
        { error: 'Missing GBP_ACCOUNT_ID or GBP_LOCATION_ID env vars' },
        { status: 500 }
      );
    }

    const accessToken = await getAccessToken();

    const baseUrl = `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`;
    // const baseUrl = `https://mybusiness.googleapis.com/v4/accounts/-/locations/${locationId}/reviews`;

    let pageToken = null;
    const allReviews = [];

    for (let i = 0; i < 30; i++) {
      const url = new URL(baseUrl);
      url.searchParams.set('pageSize', '50');
      if (pageToken) url.searchParams.set('pageToken', pageToken);

      const resp = await fetch(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (!resp.ok) {
        const text = await resp.text();
        return Response.json(
          { error: 'Google reviews API failed', details: text },
          { status: resp.status }
        );
      }

      const data = await resp.json();

      const reviews = Array.isArray(data.reviews) ? data.reviews : [];
      allReviews.push(...reviews);

      pageToken = data.nextPageToken;
      if (!pageToken) break;
    }

    // Normalize for UI (stable fields)
    const normalized = allReviews.map((r) => ({
      reviewId: r.reviewId || null,
      reviewer: {
        displayName: r.reviewer?.displayName || 'Google User',
        profilePhotoUrl: r.reviewer?.profilePhotoUrl || null,
        isAnonymous: r.reviewer?.isAnonymous || false,
      },
      starRating: r.starRating || null,
      comment: r.comment || '',
      createTime: r.createTime || null,
      updateTime: r.updateTime || null,
      // Owner reply (if any)
      reviewReply: r.reviewReply
        ? {
            comment: r.reviewReply.comment || '',
            updateTime: r.reviewReply.updateTime || null,
          }
        : null,
    }));

    return Response.json(
      { ok: true, count: normalized.length, reviews: normalized },
      { status: 200 }
    );
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
};
