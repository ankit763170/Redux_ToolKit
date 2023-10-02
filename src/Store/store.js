import { configureStore } from "@reduxjs/toolkit";

import  CartReducer from './CartSlice'
import ProductSlice from "./ProductSlice";
const store =configureStore({
    reducer:{
        cart:CartReducer,
        product : ProductSlice
        }
})
export default store;