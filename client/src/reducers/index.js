import { combineReducers } from "redux";
import auth from "./auth";
import { bookingAPIReducer, bookingReducer, bookingDetails } from "./booking";
import rooms from "./rooms";

export default combineReducers({
  auth,
  bookingsAPI: bookingAPIReducer,
  bookings: bookingReducer,
  details: bookingDetails,
  rooms,
});
