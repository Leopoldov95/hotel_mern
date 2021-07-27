import { combineReducers } from "redux";
import auth from "./auth";
import { bookingAPIReducer, bookingReducer } from "./booking";

export default combineReducers({
  auth,
  bookingsAPI: bookingAPIReducer,
  bookings: bookingReducer,
});
