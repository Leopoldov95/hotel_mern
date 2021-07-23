import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  adults: { type: Number, required: true },
  children: { type: Number },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  price: { type: Number, required: true },
  confirmation: { type: String, required: true },
});

export default mongoose.model("Bookings", bookingSchema);
