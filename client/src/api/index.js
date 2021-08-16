import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
}); // can set a base url here

export const fetchRooms = () => API.get("/rooms");
export const fetchRoom = (url) => API.post(`/rooms/${url}`);
export const fetchAvailableRooms = (data) =>
  API.post("/bookings/available", data);
export const fetchExistingBooking = (data) => API.post("/bookings", data);
export const createBooking = (data) => API.post("/bookings/create", data);
/* export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// auth routes
export const signin = (formData) => API.post("/users/signin", formData);
export const signup = (formData) => API.post("/users/signup", formData);
 */
