import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {},
    reducers: {
        addToCart()
        {

        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice