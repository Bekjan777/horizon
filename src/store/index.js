import {configureStore} from "@reduxjs/toolkit";
import paymentSliceReducer from "./PaymentSlice.js";


export const store = configureStore({
    reducer: {
        paymentSlice: paymentSliceReducer
    }

})