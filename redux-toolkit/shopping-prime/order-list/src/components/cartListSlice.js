import { createSlice } from '@reduxjs/toolkit';
import { isExistItem } from '../utils/arrayHelper';

const initialState = [];

export const cartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    append: (state, action) => {
      state.push(action.payload);
    },
    load: (state, action) => {
      const initialCartList = action.payload;
      for (const cartItem of initialCartList) {
        if (isExistItem(cartItem, state)) {
          return;
        }

        state.push(cartItem);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { append, load } = cartListSlice.actions;

export default cartListSlice.reducer;
