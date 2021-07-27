import mongoose from "mongoose";
import Rooms from "../models/rooms";

export const getRooms = async (req, res) => {
  try {
    // retieve all posts we have in the data base
    const rooms = await Rooms.find();
    //console.log(postMessages);
    res.status(200).json(rooms);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRoom = async (req, res) => {
  const { url } = req.params;
  try {
    const room = await Rooms.findOne({ url });
    res.status(200).json(room);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
