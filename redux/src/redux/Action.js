import { DECRESE, INCREASE, RESET } from "./ActionType";

export const increase = (payload) => {
  return {
    type: INCREASE,
    payload: payload,
  };
};

export const decrement = () => {
  return {
    type: DECRESE,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
