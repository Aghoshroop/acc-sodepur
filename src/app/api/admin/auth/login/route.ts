import { NextResponse } from 'next/server';
import { setAdminSession, clearAdminSession } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const envPassword = (process.env.ADMIN_PASSWORD || 'admin123').trim();
    const inputPassword = typeof body?.password === 'string' ? body.password.trim() : '';

    if (inputPassword === envPassword) {
      await setAdminSession('authenticated-admin-session');
      const response = NextResponse.json({ success: true });
      response.cookies.set('acc_admin_session', 'authenticated-admin-session', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      });
      return response;
    } else {
      return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 });
    }
  } catch (error: any) {
    console.error('Admin login error:', error);
    return NextResponse.json({ success: false, error: error?.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE() {
  await clearAdminSession();
  const response = NextResponse.json({ success: true });
  response.cookies.delete('acc_admin_session');
  return response;
}
