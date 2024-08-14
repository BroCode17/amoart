'use client'
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../services/userApi";
import  userReducer from '../slices/userSlice'
import productSlice from "../slices/productSlice";
import cartSlice from '../slices/cartSlice'


export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        user: userReducer,
        product: productSlice,
        cart: cartSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([productApi.middleware, userApi.middleware])
})
setupListeners(store.dispatch)