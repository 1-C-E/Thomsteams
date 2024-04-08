import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../dbUrl";

export const fetchBasket = createAsyncThunk('basket/fetchBasket', async (userID) => {
    const {data} = await axios.get(url + '/furniture/getBasket/' + userID)
    return data
})

const initialState = {
    basket: {
        items: [],
        status: 'loading'
    }
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder
        .addCase(fetchBasket.pending, (state) =>{
            state.basket.items = []
            state.basket.status = 'loading'
        })
        .addCase(fetchBasket.fulfilled, (state, action) =>{
            state.basket.items = action.payload
            state.basket.status = 'loaded'
        })
    }
})

export const basketReducer = basketSlice.reducer