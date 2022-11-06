import { combineReducers } from "redux";

import {
  bookingAPIReducer,
  bookingDetails,
  existingBookingReducer,
  confirmationReducer,
} from "./booking";
import rooms from "./rooms";
import { serverStatusReducer } from "./server";

export default combineReducers({
  bookingsAPI: bookingAPIReducer,
  confirmation: confirmationReducer,
  details: bookingDetails,
  existing: existingBookingReducer,
  rooms,
  serverStatus: serverStatusReducer,
});
