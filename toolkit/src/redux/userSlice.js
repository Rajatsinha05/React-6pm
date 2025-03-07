import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     users:[]
// }

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    add: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export default userSlice.reducer

export const {add}=userSlice.actions