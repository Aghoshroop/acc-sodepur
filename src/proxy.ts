import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Only protect /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Allow access to login API
    if (request.nextUrl.pathname.startsWith('/api/admin/auth')) {
      return NextResponse.next();
    }

    const session = request.cookies.get('acc_admin_session')?.value;
    const isAuthenticated = session === 'authenticated-admin-session';

    // If already logged in and visiting login page, redirect to dashboard
    if (request.nextUrl.pathname === '/admin/login') {
      if (isAuthenticated) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      return NextResponse.next();
    }

    // Protect all other admin pages
    if (!isAuthenticated) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
