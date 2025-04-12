/**
 * This file contains the default variables.
 * We may add other config contants here and export if needed.
 */

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
    duration: 3000
  },
  icons: {
    // Defne custom icons
    // success: ,
    // info: ,
    // warning: ,
    // error: ,
    // loading:
  }
};

/**
 * Configure local-storage
 */
export const localStorageConfig = {
  version: 1,
  expiry: 24 * 60 * 60 * 1000, // 24 hour
  encrypt: false
};

export * from './auth';
export * from './constants';
