import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { postReducer } from "./post/slice";

export const Store = configureStore({
  reducer: {
    user: userReducer,
    post:postReducer
  },
});
