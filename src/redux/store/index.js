/**
 * Create store for Redux
 */
import { configureStore } from '@reduxjs/toolkit';
import { sessionActions } from '@/redux/reducer/session';

export const makeStore = () => {
  return configureStore({
    reducer: {
      ...sessionActions
    }
  });
};
