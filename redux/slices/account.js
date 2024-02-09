import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../dbUrl";

export const createAccount = async (aname, mail, aphone, apassword) => {
    try{
        const result = await axios.post(url + '/auth/register', {
            email: mail,
            name: aname,
            phone: aphone,
            password: apassword
        })
        .catch((err) => console.log(err.response))
    } 
    catch(e){
        console.log(e)
    }
}

export const fetchAccountRegister = createAsyncThunk('account/fetchAccountRegister', async (params) => {
    const {data} = await axios.post(url + '/auth/register', params)
    return data
})

export const fetchAccountLogin = createAsyncThunk('account/fetchAccountLogin', async (params) => {
    const {data} = await axios.post(url + '/auth/login', params)
    return data
})

export const fetchAccountUpdate = createAsyncThunk('account/fetchAccountUpdate', async (updateData) => {
    const {data} = await axios({
        method:'patch',
        url: url + '/auth/update/' + updateData[0],
        data: updateData[1],
        headers: {
            Authorization: 'Bearer ' + updateData[2]
        }
    })
    
    return data
})

const initialState = {
    accountID: null,
    email: null,
    phone: null,
    name: null,
    favorites: [],
    basket: [],
    loginToken: null,
    status: 'loading',
    errorMessage: ''
}


const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAccountRegister.pending, (state) =>{
            state.accountID = null
            state.email = null
            state.phone = null
            state.name = null
            state.favorites = []
            state.loginToken = null
            state.status = 'loading'
        })
        .addCase(fetchAccountRegister.fulfilled, (state, action) =>{
            state.accountID = action.payload._id
            state.email = action.payload.email
            state.phone = action.payload.phone
            state.name = action.payload.name
            state.favorites = action.payload.favorites
            state.loginToken = action.payload.token
            state.basket = action.payload.basket
            state.status = 'loaded'
        })

        
        .addCase(fetchAccountLogin.pending, (state) =>{
            state.accountID = null
            state.email = null
            state.phone = null
            state.name = null
            state.favorites = []
            state.basket = []
            state.loginToken = null
            state.status = 'loading'
        })
        .addCase(fetchAccountLogin.fulfilled, (state, action) =>{
            state.accountID = action.payload._id
            state.email = action.payload.email
            state.phone = action.payload.phone
            state.name = action.payload.name
            state.favorites = action.payload.favorites
            state.loginToken = action.payload.token
            state.basket = action.payload.basket
            state.status = 'loaded'
        })
        .addCase(fetchAccountLogin.rejected, (state) =>{
            state.status = 'rejected'
        })

        .addCase(fetchAccountUpdate.fulfilled, (state, action) =>{
            state.accountID = action.payload._id
            state.email = action.payload.email
            state.phone = action.payload.phone
            state.name = action.payload.name
            state.favorites = action.payload.favorites
            state.basket = action.payload.basket
        })


    }
})

export const accountStatus = (state) => state.account.status

export const accountReducer = accountSlice.reducer