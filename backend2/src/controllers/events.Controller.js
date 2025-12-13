import { readJSON, writeJSON } from "../utils.js";
import path from "path";
import { fileURLToPath } from "url";

// Fix for absolute path in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Point to your data file
const FILENAME = path.join(__dirname, "../data/events.json");

export const getEvents = (req, res) => {
  try {
    const events = readJSON(FILENAME);
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Failed to load events", error: err.message });
  }
};

export const getEvent = (req, res) => {
  try {
    const events = readJSON(FILENAME);
    const event = events.find(e => e.id === parseInt(req.params.id));
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: "Failed to load event", error: err.message });
  }
};

export const createEvent = (req, res) => {
  try {
    const events = readJSON(FILENAME);
    const newEvent = { id: events.length ? events[events.length - 1].id + 1 : 1, ...req.body };
    events.push(newEvent);
    writeJSON(FILENAME, events);
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ message: "Failed to create event", error: err.message });
  }
};

export const updateEvent = (req, res) => {
  try {
    const events = readJSON(FILENAME);
    const index = events.findIndex(e => e.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Event not found" });

    events[index] = { ...events[index], ...req.body };
    writeJSON(FILENAME, events);
    res.json(events[index]);
  } catch (err) {
    res.status(500).json({ message: "Failed to update event", error: err.message });
  }
};

export const deleteEvent = (req, res) => {
  try {
    let events = readJSON(FILENAME);
    const exists = events.some(e => e.id === parseInt(req.params.id));
    if (!exists) return res.status(404).json({ message: "Event not found" });

    events = events.filter(e => e.id !== parseInt(req.params.id));
    writeJSON(FILENAME, events);
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete event", error: err.message });
  }
};
