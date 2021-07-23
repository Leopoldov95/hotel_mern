import express from "express";
import { getBookings, postBooking } from "../controllers/bookings";

const router = express.Router();

router.get("/", getBookings);
router.post("/", postBooking);

export default router;
