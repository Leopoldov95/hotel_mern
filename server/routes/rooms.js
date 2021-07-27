import express from "express";
import { getRooms, getRoom } from "../controllers/rooms.js";
const router = express.Router();

router.get("/", getRooms); // gets all rooms
router.post("/:id", getRoom); // gets a specific room

export default router;
