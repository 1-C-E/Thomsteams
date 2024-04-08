import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../dbUrl";

export const fetchSelectedFurniture = createAsyncThunk('selectedFurniture/fetchSelectedFurniture', async (furnitureID) => {
    const {data} = await axios.get(url + '/furniture/' + furnitureID)
    return data
})

const initialState = {
    items: null,
    status: "loading"
}

const selectedFurnitureSlice = createSlice({
    name: 'selectedFurniture',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder
        .addCase(fetchSelectedFurniture.pending, (state) =>{
            state.items = null
            state.status = 'loading'
        })
        .addCase(fetchSelectedFurniture.fulfilled, (state, action) =>{
            state.items = action.payload
            state.status = 'loaded'
        })
    }
})

export const selectedFurnitureReducer = selectedFurnitureSlice.reducer