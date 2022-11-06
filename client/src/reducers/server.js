import { AWAKE } from "../constants/actionTypes";

export const serverStatusReducer = (state = false, action) => {
  switch (action.type) {
    case AWAKE:
      return action.payload;
    default:
      return state;
  }
};
