import mongoose from "mongoose";
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
    const {
      firstName,
      lastName,
      email,
      phone,
      adults,
      children,
      dates,
      title,
      price,
      paymentType,
      cardNum,
    } = data;
    console.log(firstName);
    // create a unique booking ID
    const newId = geenerateID(6);
    console.log(newId);
    const totalNights =
      new Date(dates[1]).getDate() - new Date(dates[0]).getDate();
    // check if ID already exists

    // create a new booking in the MongoDB DB
    const result = await Bookings.create({
      firstName,
      lastName,
      email,
      phone,
      adults,
      children,
      startDate: dates[0],
      endDate: dates[1],
      title,
      price: price * totalNights,
      cardType: paymentType,
      cardNum,
      confirmation: newId,
    });
    /* console.log(data) */
    res.status(200).json({ result: result });
  } catch (error) {
    console.log(error);
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
