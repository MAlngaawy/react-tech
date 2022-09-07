import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 10,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseAmount: (state) => {
      state.amount = 500;
    },
  },
});

export const { increaseAmount } = cartSlice.actions;
export default cartSlice.reducer;
