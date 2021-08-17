import {
  CREATE,
  AVAILABLE,
  ROOM_DET,
  BOOK_DET,
  DELETE,
  FETCH,
  FETCH_ALL
} from "../constants/actionTypes";

// this will be used to manage state/API booking, check for available bookings and create one
export const bookingAPIReducer = (booking = [], action) => {
  switch (action.type) {
    case AVAILABLE:
      return { booking: action.payload };
    case CREATE:
      return [...booking, action.payload];
    default:
      return booking;
  }
};

export const existingBookingReducer = (booking =[], action) => {
  switch(action.type) {
    case FETCH:
        return {booking: action.payload}
    case FETCH_ALL:
        return {booking: action.payload}
    case DELETE:
      return {booking: action.payload}
    default:
      return booking;
  }
}
// the booking details will be provided here

export const bookingDetails = (
  state = {
    booking: [],
    room: [], // need to store room title and price, else checkout will have errors
}, action) => {
  switch(action.type) {

    case ROOM_DET:
      return{...state, room: action.payload}
    case BOOK_DET:
      return {...state, booking: action.payload}
    default:
      return state
  }
}


