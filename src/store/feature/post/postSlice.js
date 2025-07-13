import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        login:(state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout:(state) => {
            state.status = false;
            state.userData = null;
        },

    }
})


export const  {login, logout} = postSlice.actions;

export  default postSlice.reducer;
