import Bookings from "../models/bookings.js";
import Rooms from "../models/rooms.js";
import { generateID, deleteExpiredBookings } from "./helper.js";

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await deleteExpiredBookings();
    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getBooking = async (req, res) => {
  try {
    deleteExpiredBookings();
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
      return res.status(200).json(existingBooking);
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
    const rawDates =
      new Date(dates[1]).getTime() - new Date(dates[0]).getTime();
    const totalNights = rawDates / (1000 * 3600 * 24);
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
    const roomData = await Rooms.find({
      $and: [
        { adults: { $gte: data.adults } },
        { children: { $gte: data.children } },
      ],
    });
    // now that we sent this to object, we can now mutate it
    let available = roomData.map((element) => ({
      ...element.toObject(),
    }));

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

    for (let booking of existingBookings) {
      let existingStartDate = new Date(booking.startDate).getTime();
      let existingEndDate = new Date(booking.endDate).getTime();
      // check for date collision
      // check for start date cllision
      /* if (
        (existingStartDate.getMonth() === startDate.getMonth() &&
          existingStartDate.getFullYear() === startDate.getFullYear()) ||
        (existingEndDate.getMonth() === endDate.getMonth() &&
          existingEndDate.getFullYear() === endDate.getFullYear())
      ) {
        if (
          (startDate.getDate() >= existingStartDate.getDate() &&
            startDate.getDate() <= existingEndDate.getDate()) ||
          (endDate.getDate() >= existingStartDate.getDate() &&
            endDate.getDate() <= existingEndDate.getDate())
        ) */ if (
        (existingStartDate >= startDate.getTime() &&
          existingStartDate <= endDate.getTime()) ||
        (existingEndDate >= startDate.getTime() &&
          existingEndDate <= endDate.getTime())
      ) {
        // handle error logic here
        // this is breaking the app if 2 or more conflicts exist
        /*  available = available.map((element) => ({
            hasError:
              element.title === booking.room
                ? {
                    room: booking.room,
                    dates: [booking.startDate, booking.endDate],
                  }
                : false,
            ...element,
          })); */
        // double loop here
        for (let room of available) {
          if (room.title === booking.room) {
            room.hasError = {
              room: booking.room,
              dates: [booking.startDate, booking.endDate],
            };
          }
        }
      }
    }
    console.log(available);
    res.status(200).json(available);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
