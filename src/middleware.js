import { NextResponse } from 'next/server';


// This function will be called for every request that matches the `matcher`
export function middleware(request) {
  const token = request.cookies.get('auth_token')?.value;
  const { pathname } = request.nextUrl;

  // If user is authenticated and tries to access login, register, or root, redirect to /board
  if (
    token &&
    (pathname === '/' || pathname === '/login' || pathname === '/register')
  ) {
    return NextResponse.redirect(new URL('/board', request.url));
  }

  // If user is NOT authenticated and tries to access /board, redirect to /login
  if (
    !token &&
    pathname.startsWith('/board')
  ) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirectTo', request.nextUrl.pathname + request.nextUrl.search);
    return NextResponse.redirect(loginUrl);
  }

  // Otherwise, allow the request
  return NextResponse.next();
}

// Apply middleware to all relevant routes
export const config = {
  matcher: ['/', '/login', '/register', '/board/:path*'],
};