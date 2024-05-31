import { configureStore } from '@reduxjs/toolkit';
import cart from "./cartSlice";
import items from "./itemsSlice";


export const store = configureStore({
  reducer: {
    items: items,
    cart
  },
})