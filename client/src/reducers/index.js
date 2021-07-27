import { combineReducers } from "redux";
import auth from "./auth";
import { bookingAPIReducer, bookingReducer } from "./booking";
import rooms from "./rooms";

export default combineReducers({
  auth,
  bookingsAPI: bookingAPIReducer,
  bookings: bookingReducer,
  rooms,
});
