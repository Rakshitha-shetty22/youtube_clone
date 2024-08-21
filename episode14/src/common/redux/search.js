import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
  name: "searchStore",
  initialState: {
    searchlist: {}        //here its object instead of array becz of complixity of object is o(1)
  },

  reducers: {
    cacheResult: (state, action) => {
      //state = Object.assign(state.searchlist, action.payload);  OR
      state.searchlist = { ...state.searchlist, ...action.payload };
    },
  },
});

export const {cacheResult} = search.actions;
export default search.reducer;