import { NextResponse } from 'next/server';

export function middleware(request) {
  const cookie = request.cookies.get('auth_spotify');
  const { pathname } = request.nextUrl;

  if (cookie && (pathname === '/' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  if (!cookie && pathname.startsWith('/home')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: ['/', '/register', '/home/:path*'],
};
