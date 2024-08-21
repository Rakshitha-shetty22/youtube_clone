import { createSlice } from "@reduxjs/toolkit";

const slice =  createSlice(
    {
        name: "app",
        initialState : {
            ismenuopen: true
        },
        reducers: {
            togglemenu: (state)=> {
                state.ismenuopen = !state.ismenuopen;
            },
            closemenu: (state)=> {
                state.ismenuopen = false;
            }
        }
    }
)

export default slice.reducer;
export const {togglemenu,closemenu} = slice.actions;