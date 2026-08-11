import { NextResponse } from 'next/server';

/**
 * GET /api/social/instagram
 * Fetches recent posts from ACC Instagram (acc.sodepur) using Instagram Graph API.
 *
 * Setup:
 * 1. Go to https://developers.facebook.com → Create App → Add Instagram product
 * 2. Connect your Instagram Business/Creator account
 * 3. Generate a Long-Lived User Access Token
 * 4. Add to .env.local:
 *    INSTAGRAM_ACCESS_TOKEN=your_long_lived_token_here
 *    INSTAGRAM_USER_ID=your_instagram_user_id (optional, defaults to 'me')
 */

const INSTAGRAM_API = 'https://graph.instagram.com';
const FIELDS = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: 'INSTAGRAM_ACCESS_TOKEN not configured in .env.local', posts: [] },
      { status: 200 } // Return 200 so UI shows fallback gracefully
    );
  }

  try {
    const res = await fetch(
      `${INSTAGRAM_API}/me/media?fields=${FIELDS}&limit=12&access_token=${token}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!res.ok) {
      const err = await res.json();
      console.error('[Instagram API Error]', err);
      return NextResponse.json({ error: err.error?.message || 'API error', posts: [] }, { status: 200 });
    }

    const data = await res.json();

    // Transform to our internal format
    const posts = (data.data || [])
      .filter((p: any) => p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM')
      .map((p: any) => ({
        id: p.id,
        platform: 'instagram',
        author: 'ACC Sodepur',
        handle: '@acc.sodepur',
        content: p.caption || '',
        imageUrl: p.media_url || p.thumbnail_url || '',
        link: p.permalink,
        date: p.timestamp,
      }));

    return NextResponse.json({ posts });
  } catch (err) {
    console.error('[Instagram fetch error]', err);
    return NextResponse.json({ error: 'Failed to fetch', posts: [] }, { status: 200 });
  }
}
