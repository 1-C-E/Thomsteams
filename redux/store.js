import { configureStore } from "@reduxjs/toolkit";
import { furnitureReducer } from "./slices/furniture";
import { accountReducer } from "./slices/account";
import { furnitureExtraReducer } from "./slices/furnitureExtra";
import { favoriteFurnitureReducer } from "./slices/favoriteFurniture";
import { basketReducer } from "./slices/basket";
import { selectedFurnitureReducer } from "./slices/selectedFurniture";

const store = configureStore({
    reducer: { 
        furniture: furnitureReducer,
        account: accountReducer,
        furnitureExtra: furnitureExtraReducer,
        favoriteFurniture: favoriteFurnitureReducer,
        basket: basketReducer,
        selectedFurniture: selectedFurnitureReducer
    }
})

export default store