import {
  CREATE,
  AVAILABLE,
  ADULT,
  CHILDREN,
  CHANGE_DATE,
} from "../constants/actionTypes";
import * as api from "../api";

/* Actions for managing local booking state */
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

/* Actions for handling API state */

export const getAllAvailable = (params) => async (dispatch) => {
  try {
    const { data } = await api.fetchAvailableRooms(params);
    dispatch({ type: AVAILABLE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
