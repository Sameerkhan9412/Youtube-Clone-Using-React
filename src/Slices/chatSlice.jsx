import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_MESSAGES_SHOWING_COUNT} from "../utils/constants";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            // state.messages.push(action.payload);
            // state.messages.splice(LIVE_CHAT_MESSAGES_SHOWING_COUNT,1);
            if(state.messages.length>LIVE_CHAT_MESSAGES_SHOWING_COUNT){
                state.messages.shift();
            }
            // state.messages.shift(LIVE_CHAT_MESSAGES_SHOWING_COUNT, 1);
            state.messages.push(action.payload);
        }
    }
})

export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;