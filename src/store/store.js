import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./feature/auth/authSlice.js";
import postSlice from "./feature/post/postSlice.js";

const store = configureStore({
    reducer: {
        auth: authSlice,
        posts: postSlice,
    },
})

export default store;
