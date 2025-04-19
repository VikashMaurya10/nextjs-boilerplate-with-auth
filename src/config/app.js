/**
 * Constants here
 */

/**
 * Application name
 * @type {string}
 */
export const APP_NAME = 'Acme Inc.';
export const APP_NAME_SLUG = `${APP_NAME?.slice(0, 5).replaceAll(' ', '-').toLowerCase()}`;

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
export const LOCAL_STORAGE_PREFIX = APP_NAME_SLUG;

/**
 * Configure local-storage
 */
export const localStorageConfig = {
  version: 1,
  expiry: 24 * 60 * 60 * 1000, // 24 hour
  encrypt: true,
};

/**
 * Configure Toast
 */
export const ToastConfig = {
  position: 'bottom-center',
  offset: '16px',
  richColors: true,
  toastOptions: {
    // Define default options
    className: '',
    duration: 3000,
  },
  /* eslint-disable capitalized-comments */
  icons: {
    // Defne custom icons
    // success: ,
    // info: ,
    // warning: ,
    // error: ,
    // loading:
  },
  /* eslint-enable capitalized-comments */
};
