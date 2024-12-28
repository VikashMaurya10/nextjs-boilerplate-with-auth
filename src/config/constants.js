/**
 * Constants here
 */

/**
 * Application name
 * @type {string}
 */
export const APP_NAME = 'Acme';

// If callback url not exsit in URL then after signin the user will redirect on this route
export const DEFAULT_REDIRECTION = '/dashboard';

// All protected must start with this route
export const PROTECTED_ROUTE_STARTWITH = '/dashboard';

// Public paths for application
export const PUBLIC_ROUTES = ['/login', '/signup'];

/**
 * Revalidate time(s) each fetch request
 * Set default revalidate at every hour
 */
export const REVALIDATE_TIME = 60 * 60;

/**
 * Local storage key prefix
 * @type {string}
 */
export const LOCAL_STORAGE_PREFIX = 'acme_';
