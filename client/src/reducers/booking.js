import { CREATE, ADULT, CHILDREN, CHANGE_DATE } from "../constants/actionTypes";
import { addDays } from "date-fns";

// this will be used to manage state/API booking
export const bookingAPIReducer = (booking = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...booking, action.payload];
    default:
      return booking;
  }
};

// this will used to manage the booking state locally
export const bookingReducer = (
  state = {
    dates: [
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: "selection",
      },
    ],
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
