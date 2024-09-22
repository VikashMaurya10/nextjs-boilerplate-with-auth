/**
 * Constants here
 */

// If callback url not exsit in URL then after signin the user will redirect on this route
export const DEFAULT_REDIRECTION = '/dashboard';

// All protected must start with this route
export const PROTECTED_ROUTE_STARTWITH = '/dashboard';

// Public paths for application
export const PUBLIC_ROUTES = ['/login', '/signup'];

// Revalidate time(ms) each fetch request
export const REVALIDATE_TIME = 3000;
