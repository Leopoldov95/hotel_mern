import {
  CREATE,
  ADULT,
  CHILDREN,
  CHANGE_DATE,
  AVAILABLE,
  INFO_DET,
  ROOM_DET,
  BOOK_DET
} from "../constants/actionTypes";
import { addDays } from "date-fns";

// this will be used to manage state/API booking, check for available bookings and create one
/* state = {
  room: [], // room to be booked
  booking: [], // basic booking info
  details: [] // giest details
} */
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

// this will used to manage the booking state locally, this what you see on the booking widget and what gets send to the server
export const bookingReducer = (
  state = {
    dates: [new Date(), addDays(new Date(), 7)],
    adults: 1,
    children: 0,
    pricePerNight: null,
    totalPrice: null,
  },
  action
) => {
  switch (action.type) {
    case ADULT:
      if (
        state.adults + action.payload > 0 &&
        state.adults + action.payload <= 5
      ) {
        return { ...state, adults: state.adults + action.payload };
      }
      return state;

    case CHILDREN:
      if (
        state.children + action.payload >= 0 &&
        state.children + action.payload <= 5
      ) {
        return { ...state, children: state.children + action.payload };
      }
      return state;
    case CHANGE_DATE:
      return { ...state, dates: action.payload };
    default:
      return state;
  }
};
