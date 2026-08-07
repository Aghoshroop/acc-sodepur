import { cookies } from 'next/headers';

const SESSION_COOKIE_NAME = 'acc_admin_session';
const PORTAL_COOKIE_NAME = 'acc_portal_session';

export async function setAdminSession(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  });
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE_NAME)?.value;
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function verifyAdminSession() {
  const session = await getAdminSession();
  if (!session) return false;
  
  // For this simple implementation, the token is just a hash or a specific string.
  // In a real app, this should be a verified JWT. Here we just check if it matches a known value derived from the password or env.
  // For simplicity since we use ADMIN_PASSWORD, we'll store a static token 'authenticated-admin-session'
  return session === 'authenticated-admin-session';
}

export async function setPortalSession(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(PORTAL_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  });
}

export async function getPortalSession() {
  const cookieStore = await cookies();
  return cookieStore.get(PORTAL_COOKIE_NAME)?.value;
}

export async function clearPortalSession() {
  const cookieStore = await cookies();
  cookieStore.delete(PORTAL_COOKIE_NAME);
}

export async function verifyPortalSession() {
  const session = await getPortalSession();
  if (!session) return false;
  return session === 'authenticated-portal-session';
}
