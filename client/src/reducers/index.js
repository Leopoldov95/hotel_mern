import { combineReducers } from "redux";
import auth from "./auth";
import { bookingAPIReducer, bookingDetails, existingBookingReducer } from "./booking";
import rooms from "./rooms";

export default combineReducers({
  auth,
  bookingsAPI: bookingAPIReducer,
  details: bookingDetails,
  existing: existingBookingReducer,
  rooms,
});
