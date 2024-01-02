import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../Slices/appSlice";
import searchSlice from "../Slices/searchSlice";
import chatSlice from "../Slices/chatSlice";
import themeSlice from "../Slices/themeSlice";

const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
        theme:themeSlice
    }
});

export default store;