import express from "express";
import {
  getBookings,
  postBooking,
  getAllAvailable,
} from "../controllers/bookings.js";

const router = express.Router();

router.get("/", getBookings);
router.post("/", postBooking);
router.post("/available", getAllAvailable);

export default router;
