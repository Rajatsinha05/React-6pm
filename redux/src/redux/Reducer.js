import { INCREASE } from "./ActionType";

let initialState = {
  count: 0,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
};
