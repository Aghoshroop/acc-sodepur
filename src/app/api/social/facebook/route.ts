import { NextResponse } from 'next/server';

const GRAPH_API = 'https://graph.facebook.com/v19.0';
const FIELDS = 'id,message,full_picture,created_time,permalink_url';

export async function GET() {
  const token  = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID;

  if (!token || !pageId) {
    return NextResponse.json({ error: 'Not configured', posts: [] }, { status: 200 });
  }

  try {
    const res = await fetch(
      `${GRAPH_API}/${pageId}/posts?fields=${FIELDS}&limit=8&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      const err = await res.json();
      return NextResponse.json({ error: err.error?.message || 'API error', posts: [] }, { status: 200 });
    }
    const data = await res.json();
    const posts = (data.data || [])
      .filter((p: any) => p.message)
      .map((p: any) => ({
        id: p.id,
        platform: 'facebook',
        author: 'Athletic Coaching Camp – Sodepur',
        handle: 'ACC Sodepur',
        content: p.message || '',
        imageUrl: p.full_picture || '',
        link: p.permalink_url || 'https://www.facebook.com/accsodepur',
        date: p.created_time,
      }));
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch', posts: [] }, { status: 200 });
  }
}
