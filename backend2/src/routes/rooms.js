import express from "express";
import { getRooms, getRoom, createRoom, updateRoom, deleteRoom } from "../controllers/rooms.Controller.js";

const router = express.Router();

router.get("/", getRooms);
router.get("/:id", getRoom);
router.post("/", createRoom);
router.put("/:id", updateRoom);
router.delete("/:id", deleteRoom);

export default router;
