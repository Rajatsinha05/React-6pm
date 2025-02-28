import { CREATE_POST, GET_POSTS } from "./ActionType";

let initialState = {
  post: [],
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_POST:
      return {
        ...state,
        post: [...state.post, payload],
      };
    case GET_POSTS:
      return {
        ...state,
        post: payload,
      };
    default:
      return state;
  }
};
