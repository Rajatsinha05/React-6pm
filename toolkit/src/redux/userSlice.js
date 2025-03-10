import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     users:[]
// }

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    user: {},
  },
  reducers: {
    add: (state, action) => {
      state.users.push(action.payload);
    },
    delete: (state, action) => {
      state.users = state.users.filter((user) => user.id != action.payload.id);
    },
    updateUser: (state, action) => {
      state.users = state.users.map((user) =>
        user.id == action.payload.id ? action.payload : user
      );
    },
    getUserById: (state, action) => {
      state.user = state.users.find((user) => user.id == action.payload.id);
    },
  },
});

export default userSlice.reducer;

export const { add } = userSlice.actions;
