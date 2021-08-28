import {
  CREATE,
  AVAILABLE,
  ROOM_DET,
  BOOK_DET,
  DELETE,
  FETCH,
  FETCH_ALL,
} from "../constants/actionTypes";

// this will be used to manage state/API booking, check for available bookings and create one
export const bookingAPIReducer = (booking = [], action) => {
  switch (action.type) {
    case AVAILABLE:
      return action.payload;
    default:
      return booking;
  }
};

export const confirmationReducer = (confirmation = [], action) => {
  switch (action.type) {
    case CREATE:
      return action.payload;
    default:
      return confirmation;
  }
};

export const existingBookingReducer = (booking = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    case FETCH_ALL:
      return action.payload;
    case DELETE:
      return booking.filter((book) => book.confirmation !== action.payload);
    default:
      return booking;
  }
};
// the booking details will be provided here

export const bookingDetails = (
  state = {
    booking: [],
    room: [], // need to store room title and price, else checkout will have errors
  },
  action
) => {
  switch (action.type) {
    case ROOM_DET:
      return { ...state, room: action.payload };
    case BOOK_DET:
      return { ...state, booking: action.payload };
    default:
      return state;
  }
};
