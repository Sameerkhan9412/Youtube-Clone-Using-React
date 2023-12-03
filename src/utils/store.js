import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../Slices/appSlice";

const store=configureStore({
    reducer:{
        app:appSlice,
    }
});

export default store;