import {
  CREATE,
  FETCH,
  AVAILABLE,
  ADULT,
  CHILDREN,
  CHANGE_DATE,
  ROOM_DET,
  BOOK_DET
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

export const postRoomDetails = (data) => {
  return {
    type: ROOM_DET,
    payload: data,
  };
};

export const postBookingDetails = (data) => {
  return {
    type: BOOK_DET,
    payload: data,
  };
};

export const postBooking = (details) => async (dispatch) => {
  try {
    const newBooking = {...details.formData, ...details.guestDetails.booking, ...details.guestDetails.room}
    const { data } = await api.createBooking(newBooking);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleBooking = (id) => async (dispatch) => {
  try {
    const {data} = await api.fetchExistingBooking(id);
    dispatch({type: FETCH, payload: data});
  } catch (error) {
    console.log(error)
  }
}
