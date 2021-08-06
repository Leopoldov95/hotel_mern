import {
  CREATE,
  AVAILABLE,
  ADULT,
  CHILDREN,
  CHANGE_DATE,
  INFO_DET,
  ROOM_DET,
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

// Actions for booking details

export const postBookingDetails = (data) => {
  return {
    type: ROOM_DET,
    payload: data,
  };
};

export const postGuestDetails = (data) => {
  return {
    type: INFO_DET,
    payload: data,
  };
};

export const postBooking = (details) => async (dispatch) => {
  try {
    const { data } = await api.createBooking(details);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
