import { createSlice } from "@reduxjs/toolkit";

const themeSlice=createSlice({
    name:"theme",
    initialState:{
        isDark:false,
    },
    reducers:{
        toggleTheme:(state)=>{
            state.isDark=!state.isDark;
        },
        closeMenu:(state)=>{
            state.isDark=false;
        }
    },
})
export const {toggleTheme,closeMenu}=themeSlice.actions;
export default themeSlice.reducer;