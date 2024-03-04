import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../dbUrl";

export const fetchFurniture = createAsyncThunk('furniture/fetchFurniture', async () => {
    const {data} = await axios.get(url + '/furniture')
    return data
})

export const fetchFurnitureSearch = createAsyncThunk('furniture/fetchFurnitureSearch', async (params) => {
    const {data} = await axios({
        method:'patch',
        url: url + '/furnitureSearch',
        data: params,
    })
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
    extraReducers: (builder) => {
        builder
        .addCase(fetchFurniture.pending, (state) =>{
            state.furniture.items = []
            state.furniture.status = 'loading'
        })
        .addCase(fetchFurniture.fulfilled, (state, action) =>{
            state.furniture.items = action.payload
            state.furniture.status = 'loaded'
        })
        .addCase(fetchFurnitureSearch.pending, (state) =>{
            state.furniture.items = []
            state.furniture.status = 'loading'
        })
        .addCase(fetchFurnitureSearch.fulfilled, (state, action) =>{
            state.furniture.items = action.payload
            state.furniture.status = 'loaded'
        })

    }
})

export const furnitureReducer = furnitureSlice.reducer