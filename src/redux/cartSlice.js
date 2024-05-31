import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime()
            state.cartItems.push({
                id: timeId,
                itemId: action.payload.item.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.item.price
            })
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return +(cartItems.totalPrice + total).toFixed(2)
    }, 0)
}

export const getTotalArticles = state => {
    return state.cart.cartItems.length 
};

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = slice.actions;
export default slice.reducer;