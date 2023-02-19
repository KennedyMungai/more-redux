import { createSlice } from "@reduxjs/toolkit";


const ui = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state)
        {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})