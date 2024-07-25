import { configureStore } from '@reduxjs/toolkit';
import garments from "./garmentsSlice";
import cart from "./cartSlice";


export const store = configureStore({
  reducer: {
    garments,
    cart
  },
})