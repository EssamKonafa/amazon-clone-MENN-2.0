import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //actions
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(
                (basketItem) => basketItem.id === action.payload.id
            )
            
            let newBasekt = [...state.items]

            if(index >=0){
                newBasekt.splice(index, 1)
            } else {
                console.warn(`cant remove product ${action.payload.id} as its not in basket`);
            }
            state.items=newBasekt
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

//selectors this is how we pull information from the global store slice
export const selectItems = (state) => state.cart.items

export default cartSlice.reducer