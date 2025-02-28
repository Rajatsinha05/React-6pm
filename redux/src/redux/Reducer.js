import { DECRESE, INCREASE, RESET } from "./ActionType";

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

    case DECRESE:
      return {
        ...state,
        count: state.count - 10,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};
