import { configureStore } from '@reduxjs/toolkit';
import cartListReducer from '../components/cartListSlice';

export const store = configureStore({
  reducer: {
    cartList: cartListReducer,
  },
});
