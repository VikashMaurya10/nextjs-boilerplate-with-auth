/**
 * Create session reducer of Redux
 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userSession: null,
  isLoading: true,
  cart: []
};

const sessionData = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {
    loadingStart: (state) => {
      state.isLoading = true;
    },
    loadingStop: (state) => {
      state.isLoading = false;
    },
    add: (state, action) => {
      state.cart.push(action.payload);
    }
  }
});

export const sessionActions = sessionData.actions;
 
export default sessionData.reducer;
