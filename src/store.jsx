import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import testReducer from "./features/test/testReduxSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    test: testReducer,
  },
});
