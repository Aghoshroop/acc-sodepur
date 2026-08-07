import { NextResponse } from 'next/server';
import { setPortalSession, clearPortalSession } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const envPassword = process.env.PORTAL_PASSWORD?.trim();

    if (password === envPassword) {
      await setPortalSession('authenticated-portal-session');
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE() {
  await clearPortalSession();
  return NextResponse.json({ success: true });
}
