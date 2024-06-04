import axios from "axios";

const API = axios.create({
  baseURL: "https://suay-resort-api.onrender.com/",
}); // can set a base url here

export const testConnection = () => API.get("/");
export const fetchRooms = () => API.get("/rooms");
export const fetchRoom = (url) => API.post(`/rooms/${url}`);
export const fetchAvailableRooms = (data) =>
  API.post("/bookings/available", data);
export const fetchAllBookings = () => API.get("/bookings");
export const fetchExistingBooking = (data) => API.post("/bookings", data);
export const createBooking = (data) => API.post("/bookings/create", data);
export const deleteBooking = (data) => API.post("/bookings/delete", data);
export const signin = (data) => API.post("/auth", data);
