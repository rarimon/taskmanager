import {createSlice} from "@reduxjs/toolkit";

export const settingSlice=createSlice({
    name: "setting",
    initialState:{
        loading: "d-none",
    },
    reducers: {
        showLoader: (state) => {
            state.loading =" ";
        },
        hideLoader: (state) => {
            state.loading = "d-none";
        },
    },

})

export const {showLoader, hideLoader} = settingSlice.actions;
export default settingSlice.reducer;