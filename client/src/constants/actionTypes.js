// Database Actions
export const CREATE = "CREATE"; // create a booking
export const FETCH = "FETCH"; // get a single booking
export const FETCH_ALL = "FETCH_ALL"; // get all bookings, admin only
export const AUTH = "AUTH"; // handle admin auth
export const LOGOUT = "LOGOUT"; // logs admin out
export const FETCH_ROOMS = "FETCH_ROOMS"; // grabs all rooms, for Rooms component, read only
export const ROOM = "ROOM"; // grabs specified room, for Room Component
export const AVAILABLE = "AVAILABLE"; // shows all available rooms

// Local state management
export const ADULT = "ADULT";
export const CHILDREN = "CHILDREN";
export const CHANGE_DATE = "CHANGE_DATE";
export const PRICE = "PRICE";
export const TOTAL = "TOTAL";
