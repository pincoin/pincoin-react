import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add() {},
    remove() {},
    clear(state) {
      state.total = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
