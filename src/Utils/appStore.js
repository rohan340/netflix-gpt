import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer:{
        user: userSlice,
        movies: movieSlice,
        config: configReducer
    }
})

export default appStore;