import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems.push({
                ...action.payload.garment,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.garment.price
            })
        },
        
        updateQuantity: (state, action) => {
            const newCart=[]
            state.cartItems.forEach(item => {
                if(item.id === action.payload.garment.id) {
                    let countNew = item.quantity + action.payload.quantity
                    let totalSum = item.price * countNew
                    const changeCart = {...item, quantity: countNew, totalPrice: totalSum}
                    newCart.push(changeCart)
                } else {
                    newCart.push(item);
                }
            })
            state.cartItems = newCart
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
export const { addItemToCart, updateQuantity, removeItemFromCart } = slice.actions;
export default slice.reducer;