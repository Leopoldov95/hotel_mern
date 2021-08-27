import { combineReducers } from "redux";
import auth from "./auth";
import {
  bookingAPIReducer,
  bookingDetails,
  existingBookingReducer,
  confirmationReducer,
} from "./booking";
import rooms from "./rooms";

export default combineReducers({
  auth,
  bookingsAPI: bookingAPIReducer,
  confirmation: confirmationReducer,
  details: bookingDetails,
  existing: existingBookingReducer,
  rooms,
});
