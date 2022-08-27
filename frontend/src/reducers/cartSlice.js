import { createSlice } from '@reduxjs/toolkit';

// The cart reducer and its actions.
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const itemExists = state.cartItems.find(e => e.product === item.product);
            if (itemExists) {
                state.cartItems = state.cartItems.map(i => i.product === itemExists.product ? item : i)
            } else {
                state.cartItems = [...state.cartItems, item];
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(i => i.product !== action.payload);
        }
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
