import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
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
