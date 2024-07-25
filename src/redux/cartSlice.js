import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const garment = action.payload.garment;

            const existingCartItem = state.cartItems.find(
                (item) => item.garmentId === garment.id
            );

            if (existingCartItem) {
                existingCartItem.quantity += action.payload.quantity;
                existingCartItem.totalPrice = existingCartItem.quantity * existingCartItem.garmentPrice;

            } else {
                const newItemId = new Date().getTime();
                state.cartItems.push({
                    id: newItemId,
                    garmentId: garment.id,
                    garmentName: garment.name,
                    garmentImg: garment.image,
                    garmentPrice: garment.price,
                    quantity: action.payload.quantity,
                    totalPrice: action.payload.quantity * garment.price,
                });
            }
            },

        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.cartItemId
            );
        },

        incrementCartItemQuantity: (state, action) => {
            const { garmentId, quantity } = action.payload;
            
            const cartItem = state.cartItems.find(
                (item) => item.garmentId === garmentId
            );
            
            if (cartItem) {
                if (quantity > 1) {
                    cartItem.quantity += quantity;
                } else {
                    cartItem.quantity += 1;
                }
                cartItem.totalPrice = cartItem.quantity * cartItem.garmentPrice;
                }
            },

            decrementCartItemQuantity: (state, action) => {
                const { garmentId } = action.payload;
        
                const cartItem = state.cartItems.find(
                    (item) => item.garmentId === garmentId
                );
        
                if (cartItem && cartItem.quantity > 1) {
                    cartItem.quantity -= 1;
                    cartItem.totalPrice = cartItem.quantity * cartItem.garmentPrice;
                }
            },

            clearCart: (state) => {
                state.cartItems = [];
            }
        },
});

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return +(cartItems.totalPrice + total).toFixed(2)
    }, 0)
}

export const getTotalArticles = state => {
    return state.cart.cartItems.length 
};

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart, incrementCartItemQuantity, decrementCartItemQuantity, clearCart } = slice.actions;
export default slice.reducer;