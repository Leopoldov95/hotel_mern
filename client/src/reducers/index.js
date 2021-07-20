import { combineReducers } from "redux";
import auth from "./auth";
import bookings from "./booking";

export default combineReducers({ auth, bookings });
