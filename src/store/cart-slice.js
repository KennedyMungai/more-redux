import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart()
        {

        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice