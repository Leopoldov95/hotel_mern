import {
  CREATE,
  FETCH,
  FETCH_ALL,
  AVAILABLE,
  ROOM_DET,
  BOOK_DET,
  DELETE,
  AWAKE,
} from "../constants/actionTypes";
import * as api from "../api";

/* Actions for handling API state */

export const getAllAvailable = (params) => async (dispatch) => {
  try {
    const { data } = await api.fetchAvailableRooms(params);

    dispatch({ type: AVAILABLE, payload: data });
    dispatch({ type: AWAKE, payload: true });
  } catch (error) {
    console.log(error);
  }
};

// pings the server and waits for a response
export const checkConnection = () => async (dispatch) => {
  try {
    const { data } = await api.testConnection();
    dispatch({ type: AWAKE, payload: true });
  } catch (error) {
    console.log(error);
  }
};

export const getAllBookings = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllBookings();
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: AWAKE, payload: true });
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
    const newBooking = {
      ...details.formData,
      ...details.guestDetails.booking,
      ...details.guestDetails.room,
    };

    const { data } = await api.createBooking(newBooking);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleBooking = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchExistingBooking(id);
    dispatch({ type: FETCH, payload: data });
    dispatch({ type: AWAKE, payload: true });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBooking = (id) => async (dispatch) => {
  try {
    await api.deleteBooking(id);

    dispatch({ type: DELETE, payload: id.id });
  } catch (error) {
    console.log(error);
  }
};
