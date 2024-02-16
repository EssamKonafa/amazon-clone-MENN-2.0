'use client'
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const storeFlow = configureStore({
    reducer:{
        cart: cartReducer
    }
})

export const store = storeFlow;