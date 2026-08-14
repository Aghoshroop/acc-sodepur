import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Only protect /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Allow access to the login API and the login page itself
    if (request.nextUrl.pathname === '/admin/login' || request.nextUrl.pathname.startsWith('/api/admin/auth')) {
      return NextResponse.next();
    }

    const session = request.cookies.get('acc_admin_session')?.value;

    if (!session || session !== 'authenticated-admin-session') {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
