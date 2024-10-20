import { createSlice } from '@reduxjs/toolkit';

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
        if (state.some((item) => Number(item.id) === Number(cartItem.id))) {
          continue;
        }

        state.push(cartItem);
      }
    },
  },
});

export const { append, load } = cartListSlice.actions;

export default cartListSlice.reducer;
