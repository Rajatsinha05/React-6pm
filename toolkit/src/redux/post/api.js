import axios from "axios";
import { Api } from "../../config/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApi = createAsyncThunk("post/get", async () => {
  let res = await Api.get("/posts");
  return res.data;
});

export const postApi = createAsyncThunk("post/create", async (payload) => {
  let res = await Api.post("/posts", payload);
  return res.data;
});

// export const getPosts=()=>async(dispatch)=>{
//     // api
//     // dispatch
// }
