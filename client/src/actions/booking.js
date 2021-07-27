import { CREATE, ADULT, CHILDREN, CHANGE_DATE } from "../constants/actionTypes";

export const updateAdult = (val) => {
  return {
    type: ADULT,
    payload: val,
  };
};

export const updateChildren = (val) => {
  return {
    type: CHILDREN,
    payload: val,
  };
};

export const updateDate = (val) => {
  return {
    type: CHANGE_DATE,
    payload: val,
  };
};
