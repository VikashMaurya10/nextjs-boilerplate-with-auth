import { NextResponse } from 'next/server';

import { DEFAULT_REDIRECTION, PROTECTED_ROUTE_STARTWITH, PUBLIC_ROUTES } from '@/config';
import { auth } from '@/lib';

export default auth((req) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  // Check if the user is authenticated
  const isAuthenticated = !!req.auth;

  // Check if the current route starts with PROTECTED_ROUTE_STARTWITH
  const isProtectedRoute = pathname.startsWith(PROTECTED_ROUTE_STARTWITH);

  // Check if the requested route is an public page
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  /**
   * Redirect to login if the route is protected and the user is not authenticated
   */
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL(`/login?redirect=${pathname}`, req.url);
    return NextResponse.redirect(loginUrl);
  }

  /**
   * Prevent authenticated users from visiting Public Pages
   * Redirect to the page indicated by `next` parameter, or default to DEFAULT_REDIRECTION
   * ALSO You can redirect users as per their role
   */
  if (isAuthenticated && isPublicRoute) {
    const nextPath = nextUrl.searchParams.get('redirect') || DEFAULT_REDIRECTION;
    return NextResponse.redirect(new URL(nextPath, req.url));
  }

  // Allow access to the route for other route
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
