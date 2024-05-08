import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./slice/registerSlice";
import loginSlice from "./slice/loginSlice";
import productSlice from "./slice/productSlice"
import billSlice from "./slice/billSlice";

export const store = configureStore({
    reducer: {
        register: registerSlice,
        login: loginSlice,
        product: productSlice,
        bill: billSlice
    }
})