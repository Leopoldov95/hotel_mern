import express from "express";
import {
  getBooking,
  postBooking,
  getAllAvailable,
} from "../controllers/bookings.js";

const router = express.Router();

router.post("/", getBooking);
router.post("/create", postBooking);
router.post("/available", getAllAvailable);

export default router;
