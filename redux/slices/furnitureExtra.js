import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../dbUrl";

export async function getFEData(furnitureId)
{
    const response = await axios.get(url + '/furnitureExtra/' + furnitureId)
    return response.data
}

export const fetchFurnitureExtra = createAsyncThunk('furnitureExtra/fetchFurnitureExtra', async (furnitureId) => {
    const {data} = await axios.get(url + '/furnitureExtra/6575b826ba42697ee531a66c')
    return data
})

const initialState = {
    furnitureExtra: {
        items: [],
        status: 'loading'
    }
}

const furnitureExtraSlice = createSlice({
    name: 'furnitureExtra',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFurnitureExtra.pending]: (state) => {
            state.furnitureExtra.items = []
            state.furnitureExtra.status = 'loading'
        },
        [fetchFurnitureExtra.fulfilled]: (state, action) => {
            state.furnitureExtra.items = action.payload
            state.furnitureExtra.status = 'loaded'
        },
        [fetchFurnitureExtra.error]: (state) => {
            state.furnitureExtra.items = []
            state.furnitureExtra.status = 'error'
        },
    }
})

export const furnitureExtraReducer = furnitureExtraSlice.reducer