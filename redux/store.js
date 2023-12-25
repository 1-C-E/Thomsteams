import { configureStore } from "@reduxjs/toolkit";
import { furnitureReducer } from "./slices/furniture";
import { accountReducer } from "./slices/account";
import { furnitureExtraReducer } from "./slices/furnitureExtra";

const store = configureStore({
    reducer: { 
        furniture: furnitureReducer,
        account: accountReducer,
        furnitureExtra: furnitureExtraReducer
    }
})

export default store