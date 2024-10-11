import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    name: '',
    formBusiness: [],
    formJob: [],
    formCount: [],
    FormManager: [],
    ChoiceUsePlatform: []


};

export const senData = createAsyncThunk(
    "cart/senData",
    async (params) => {

        const {data} = await axios.get(
            `http://188.68.219.194:2025/getAllProduct`
        );
        return data;
    }
);

export const main = createSlice({
    name: "main",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(senData.pending, (state, {payload}) => {

            state.isLoading = true;
        });
        builder.addCase(senData.fulfilled, (state, {payload}) => {
            state.products = [...payload];
            state.isLoading = false;
        });
        builder.addCase(senData.rejected, (state, {payload}) => {
            state.isLoading = false;
        });

    },
    reducers: {
        setChoiceName: (state, {payload}) => {
            console.log(payload)
            state.name = payload
        },
        setChoiceBusinessRedux: (state, {payload}) => {
            state.formBusiness = payload
        },
        setChoiceJobRedux: (state, {payload}) => {
            state.formJob = payload
        },
        setChoiceCountRedux: (state, {payload}) => {
            state.formCount = payload
        },
        setChoiceManagerRedux: (state, {payload}) => {
            state.FormManager = payload
        },
        setChoicePlatformRedux: (state, {payload}) => {
            state.ChoiceUsePlatform = [...state.ChoiceUsePlatform, payload]
        },
        deleteChoicePlatformRedux: (state, {payload}) => {
            state.ChoiceUsePlatform = state.ChoiceUsePlatform.filter(el => el !== payload)
        },


    },
});

export const {
    setChoiceName,
    setChoiceBusinessRedux,
    setChoiceJobRedux,
    setChoiceCountRedux,
    setChoiceManagerRedux,
    setChoicePlatformRedux,
    deleteChoicePlatformRedux,

    setChoiceChoiceCityStore
} =
    main.actions;

export default main.reducer;
