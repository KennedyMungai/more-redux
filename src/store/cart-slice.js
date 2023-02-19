import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state, action)
        {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
        },
        removeItemFromCart()
        {

        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice