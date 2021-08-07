import mongoose from "mongoose";
import bookings from "../models/bookings.js";
import Bookings from "../models/bookings.js";
import Rooms from "../models/rooms.js";
import { checkBooking, geenerateID } from "./helper.js";

export const getBookings = async (req, res) => {
  try {
  } catch (error) {}
};

export const postBooking = async (req, res) => {
  try {
    const data = req.body; // we now have the data to create a new booking
    console.log(...data)
    // create a unique booking ID
    const newId = geenerateID(6);
    console.log(newId)
    const totalNights = data.dates[1].getDate() - data.dates[0].getDate();
    console.log(totalNights)
    // check if ID already exists

    // create a new booking in the MongoDB DB
    /* const result = await Bookings.create({
      
    });  */
     /* console.log(data) */
    res.status(200).json({ message: "You want to create a booking" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllAvailable = async (req, res) => {
  const data = req.body;
  try {
    // fetch all rooms, even if they're booked (match by adults and children)
    const available = await Rooms.find({
      $and: [
        { adults: { $gte: data.adults } },
        { children: { $gte: data.children } },
      ],
    });

    // use the retrieve rooms and check if the dates are valid, will need a helper function/file, will need to manage this later

    res.status(200).json(available);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
