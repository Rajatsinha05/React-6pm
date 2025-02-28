import { API } from "../../config/Api";
import { CREATE_POST, GET_POSTS } from "./ActionType";

export const post_create = (payload) => async (dispatch) => {
  let res = await API.post("/posts", payload);
  //   dispatch(createpost(res.data));
  dispatch({ type: CREATE_POST, payload: res.data });
};

export const getPosts = () => async (dispatch) => {
  let res = await API.get("/posts");
  dispatch({ type: GET_POSTS, payload: res.data });
};
// const createpost = (payload) => {
//   return {
//     type: CREATE_POST,
//     payload: payload,
//   };
// };
