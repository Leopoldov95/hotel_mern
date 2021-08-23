import Bookings from "../models/bookings.js";
import Rooms from "../models/rooms.js";
import { generateID } from "./helper.js";

export const getBooking = async (req, res) => {
  try {
    let existingBooking;
    const { confirmation, email } = req.body;

    if (confirmation.length > 0) {
      existingBooking = await Bookings.find({
        confirmation: confirmation.toUpperCase(),
      });
    } else if (email.length > 0) {
      existingBooking = await Bookings.find({ email: email });
    } else {
      return res.status(404).json({ message: error.message });
    }

    if (existingBooking) {
      return res.status(200).json({ result: existingBooking });
    } else {
      return res.status(404).json({ message: error.message });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
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
    // create a unique booking ID
    let newId = generateID(6);
    const totalNights =
      new Date(dates[1]).getDate() - new Date(dates[0]).getDate();
    // check if ID already exists
    // first get all ID's and store them in an array
    const idArr = [];
    const allUsers = await Bookings.find();
    allUsers.forEach((info) => {
      idArr.push(info.comfirmation);
    });
    // then use a while loop, as long as the new ID matches an item in the array, create a new one
    while (idArr.includes(newId)) {
      newId = generateID(6);
    }

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
      room: title,
      price: price * totalNights,
      cardType: paymentType,
      cardNum,
      confirmation: newId,
    });
    res.status(200).json({ result: result });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  const { id } = req.body;

  try {
    const result = await Bookings.findOneAndDelete({ confirmation: id });
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllAvailable = async (req, res) => {
  const data = req.body;
  // may want to delete bookings here that are outdated
  try {
    // fetch all rooms, even if they're booked (match by adults and children)
    const available = await Rooms.find({
      $and: [
        { adults: { $gte: data.adults } },
        { children: { $gte: data.children } },
      ],
    });

    let roomTitles = [];
    for (let room of available) {
      roomTitles.push(room.title);
    }
    // use the retrieve rooms and check if the dates are valid, will need a helper function/file, will need to manage this later
    // perhaps will want to retireve bookings that match room parameters
    const existingBookings = await Bookings.find({
      room: { $in: [...roomTitles] },
    });

    const startDate = new Date(data.dates[0]);
    const endDate = new Date(data.dates[1]);

    let errorRooms = [];
    for (let booking of existingBookings) {
      let existingStartDate = new Date(booking.startDate);
      let existingEndDate = new Date(booking.endDate);
      // check for date collision
      // check for start date cllision
      if (
        existingStartDate.getMonth() === startDate.getMonth() &&
        existingStartDate.getFullYear() === startDate.getFullYear()
      ) {
        if (
          startDate.getDate() >= existingStartDate.getDate() &&
          startDate.getDate() <= existingEndDate.getDate()
        ) {
          console.log("error with start date");
          errorRooms.push({
            room: booking.room,
            dates: [booking.startDate, booking.endDate],
          });
        }
      }
      if (
        existingEndDate.getMonth() === endDate.getMonth() &&
        existingEndDate.getFullYear() === endDate.getFullYear()
      ) {
        if (
          endDate.getDate() >= existingStartDate.getDate() &&
          endDate.getDate() <= existingEndDate.getDate()
        ) {
          console.log("error with end date");
          errorRooms.push({
            room: booking.room,
            dates: [booking.startDate, booking.endDate],
          });
        }
      }
    }
    console.log(errorRooms);
    let mapped = available.map((element) => ({
      hasError: true,
      ...element.toObject(),
    }));
    console.log(mapped);
    /* for (let room of available) {
      console.log(room.title);
    } */

    /* .toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }) */
    // once we have retieve the bookings that match our search parameters, we can check if their s date collisions
    // .getTime() returns the UTC value in milliseconds, may want to use this to check for date collisions

    // another method may be to split the time between month, date, and year and then compare all individual values.

    /* db.collection_name.find(
                     { address.postal_code: { $in: [your values] } },
                   ) */

    res.status(200).json(available);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
