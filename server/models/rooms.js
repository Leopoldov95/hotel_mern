import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  url: String,
  title: String,
  titleHeader: String,
  description: String,
  header: String,
  subHeader: String,
  view: String,
  size: String,
  adults: Number,
  children: Number,
  bedding: String,
  amenities: [String],
  paragraph: String,
  subImage: String,
  rooms: Number,
  price: Number,
});

const Rooms = mongoose.model("room", roomSchema);

export default Rooms;
