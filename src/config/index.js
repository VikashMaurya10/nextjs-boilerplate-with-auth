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

export * from './auth';
export * from './constants';
