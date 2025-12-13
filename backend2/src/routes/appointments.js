import express from "express";
import { getAppointments, createAppointment, updateAppointment, updateAppointmentStatus, deleteAppointment } from "../controllers/appointments.controller.js";

const router = express.Router();

router.get("/", getAppointments);
router.post("/", createAppointment);
router.put("/:id", updateAppointment);
router.put("/:id/status", updateAppointmentStatus);
router.delete("/:id", deleteAppointment);

export default router;
