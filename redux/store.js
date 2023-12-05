import { configureStore } from "@reduxjs/toolkit";
import { furnitureReducer } from "./slices/furniture";
import { accountReducer } from "./slices/account";

const store = configureStore({
    reducer: { 
        furniture: furnitureReducer,
        account: accountReducer
    }
})

export default store