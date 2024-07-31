import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const configSlice = createSlice({
    name:'config',
    initialState:{
        language: 'en'
    },
    reducers:{
        languageConfig:(state, action)=>{
            state.language = action.payload
        }
    }
});

export const { languageConfig } = configSlice.actions;
export default configSlice.reducer;