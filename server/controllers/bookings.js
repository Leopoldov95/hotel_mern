import mongoose from "mongoose";
import Bookings from "../models/bookings.js";
import Rooms from "../models/rooms.js";
import { checkBooking } from "./helper.js";

export const getBookings = async (req, res) => {
  try {
  } catch (error) {}
};

export const postBooking = async (req, res) => {
  try {
  } catch (error) {}
};

export const getAllAvailable = async (req, res) => {
  const data = req.body;
  try {
    // fetch all rooms, even if they're booked (match by adults and children)
    const room = await Rooms.find({
      $and: [{ adults: { $ne: 5 } }, { children: { $ne: 5 } }],
    });
    console.log(room);
    // use the retrieve rooms and check if the dates are valid, will need a helper function/file
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
