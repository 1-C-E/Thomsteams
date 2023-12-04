import { configureStore } from "@reduxjs/toolkit";
import { furnitureReducer } from "./slices/furniture";

const store = configureStore({
    reducer: { 
        furniture: furnitureReducer 
    }
})

export default store