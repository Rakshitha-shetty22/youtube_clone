import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";
import search from "./search";
import liveMessage from "./liveMessage";

const Store = configureStore({
  reducer: {
    app: slice,
    searchStore: search,
    messages: liveMessage,
  }
});

export default Store;
