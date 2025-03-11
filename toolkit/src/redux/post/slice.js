import { createSlice } from "@reduxjs/toolkit";
import { fetchApi, postApi } from "./api";

const initialState = {
  posts: [],
  post: {},
  IsLoading: false,
  IsError: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.IsLoading = true;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.IsLoading = false;
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.IsLoading = false;
        state.IsError = action.payload;
      });
    builder.addCase(postApi.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
  },
});

export const postReducer = postSlice.reducer;
