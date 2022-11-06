// Database Actions
export const CREATE = "CREATE"; // create a booking
export const FETCH = "FETCH"; // get a single booking
export const DELETE = "DELETE"; // deletes a single booking
export const FETCH_ALL = "FETCH_ALL"; // get all bookings, admin only
export const AUTH = "AUTH"; // handle admin auth
export const LOGOUT = "LOGOUT"; // logs admin out
export const FETCH_ROOMS = "FETCH_ROOMS"; // grabs all rooms, for Rooms component, read only
export const ROOM = "ROOM"; // grabs specified room, for Room Component
export const AVAILABLE = "AVAILABLE"; // shows all available rooms

// Booking details action
export const ROOM_DET = "ROOM_DET";
export const INFO_DET = "INFO_DET";
export const BOOK_DET = "BOOK_DET";

// Local state management
export const PRICE = "PRICE";
export const TOTAL = "TOTAL";

// Server status
export const AWAKE = "AWAKE";
