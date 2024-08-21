import { createSlice } from "@reduxjs/toolkit";

const liveMessage = createSlice({
    name : "chat",
    initialState : {
        messages : []
    },
    reducers : {
        addData: (state, action) => {
            state.messages.unshift(action.payload);

            if (state.messages.length > 15) {
                state.messages.pop();
            }
        }
    }
})

export default liveMessage.reducer;

export const { addData } = liveMessage.actions;