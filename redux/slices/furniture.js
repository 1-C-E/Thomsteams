import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../dbUrl";

export const fetchFurniture = createAsyncThunk('furniture/fetchFurniture', async () => {
    
    const {data} = await axios.get(url + '/furniture')
    return data
})

const initialState = {
    furniture: {
        items: [],
        status: 'loading'
    }
}

const furnitureSlice = createSlice({
    name: 'furniture',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFurniture.pending]: (state) => {
            state.furniture.items = []
            state.furniture.status = 'loading'
        },
        [fetchFurniture.fulfilled]: (state, action) => {
            state.furniture.items = action.payload
            state.furniture.status = 'loaded'
        },
        [fetchFurniture.error]: (state) => {
            state.furniture.items = []
            state.furniture.status = 'error'
        }
    }
})

export const furnitureReducer = furnitureSlice.reducer