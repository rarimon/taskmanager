import {createSlice} from "@reduxjs/toolkit";

export const SummarySlice=createSlice({
    name:'summary',
    initialState:{
        value:[]
    },

    reducers: {
        setSummary: (state, action) => {
            state.value = action.payload;
        },
    }
})


export const {setSummary}=SummarySlice.actions;
export default SummarySlice.reducer;