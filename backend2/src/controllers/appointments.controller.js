import { readJSON, writeJSON } from "../utils.js";

const FILENAME = "appointments.json";

export const getAppointments = (req, res) => {
  try {
    let appointments = readJSON(FILENAME);
    const { status, q, startDate, endDate } = req.query;

    if (status) appointments = appointments.filter(a => a.status.toLowerCase() === status.toLowerCase());
    if (q) {
      const query = q.toLowerCase();
      appointments = appointments.filter(a => a.name.toLowerCase().includes(query) || a.email.toLowerCase().includes(query));
    }
    if (startDate) appointments = appointments.filter(a => new Date(a.date) >= new Date(startDate));
    if (endDate) appointments = appointments.filter(a => new Date(a.date) <= new Date(endDate));

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Failed to load appointments", error: err.message });
  }
};

export const createAppointment = (req, res) => {
  try {
    const appointments = readJSON(FILENAME);
    const newAppointment = { id: appointments.length ? appointments[appointments.length - 1].id + 1 : 1, ...req.body, status: "pending" };
    appointments.push(newAppointment);
    writeJSON(FILENAME, appointments);
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(500).json({ message: "Failed to create appointment", error: err.message });
  }
};

export const updateAppointment = (req, res) => {
  try {
    const appointments = readJSON(FILENAME);
    const index = appointments.findIndex(a => a.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Appointment not found" });

    appointments[index] = { ...appointments[index], ...req.body };
    writeJSON(FILENAME, appointments);
    res.json(appointments[index]);
  } catch (err) {
    res.status(500).json({ message: "Failed to update appointment", error: err.message });
  }
};

export const updateAppointmentStatus = (req, res) => {
  try {
    const appointments = readJSON(FILENAME);
    const index = appointments.findIndex(a => a.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Appointment not found" });

    appointments[index].status = req.body.status;
    writeJSON(FILENAME, appointments);
    res.json(appointments[index]);
  } catch (err) {
    res.status(500).json({ message: "Failed to update status", error: err.message });
  }
};

export const deleteAppointment = (req, res) => {
  try {
    let appointments = readJSON(FILENAME);
    const exists = appointments.some(a => a.id === parseInt(req.params.id));
    if (!exists) return res.status(404).json({ message: "Appointment not found" });

    appointments = appointments.filter(a => a.id !== parseInt(req.params.id));
    writeJSON(FILENAME, appointments);
    res.json({ message: "Appointment deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete appointment", error: err.message });
  }
};
