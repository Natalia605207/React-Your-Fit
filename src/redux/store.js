import { configureStore } from '@reduxjs/toolkit';
import cart from "./cartSlice";
import garments from "./itemsSlice";


export const store = configureStore({
  reducer: {
    garments: garments,
    cart
  },
})