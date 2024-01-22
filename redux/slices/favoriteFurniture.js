import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../dbUrl";

export const fetchFavoriteFurniture = createAsyncThunk('favoriteFurniture/fetchFavoriteFurniture', async (userID) => {
    const {data} = await axios.get(url + '/furniture/getFavorites/' + userID)
    return data
})

const initialState = {
    favoriteFurniture: {
        items: [],
        status: 'loading'
    }
}

const favoriteFurnitureSlice = createSlice({
    name: 'favoriteFurniture',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFavoriteFurniture.pending]: (state) => {
            state.favoriteFurniture.items = []
            state.favoriteFurniture.status = 'loading'
        },
        [fetchFavoriteFurniture.fulfilled]: (state, action) => {
            state.favoriteFurniture.items = action.payload
            state.favoriteFurniture.status = 'loaded'
        },
        [fetchFavoriteFurniture.error]: (state) => {
            state.favoriteFurniture.items = []
            state.favoriteFurniture.status = 'error'
        }
    }
})

export const favoriteFurnitureReducer = favoriteFurnitureSlice.reducer