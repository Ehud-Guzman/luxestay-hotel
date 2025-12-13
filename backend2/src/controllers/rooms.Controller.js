import { readJSON, writeJSON } from "../utils.js";

const FILENAME = "rooms.json";

export const getRooms = (req, res) => {
  try {
    const rooms = readJSON(FILENAME);
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: "Failed to load rooms", error: err.message });
  }
};

export const getRoom = (req, res) => {
  try {
    const rooms = readJSON(FILENAME);
    const room = rooms.find(r => r.id === parseInt(req.params.id));
    if (!room) return res.status(404).json({ message: "Room not found" });
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: "Failed to load room", error: err.message });
  }
};

export const createRoom = (req, res) => {
  try {
    const rooms = readJSON(FILENAME);
    const newRoom = { id: rooms.length ? rooms[rooms.length - 1].id + 1 : 1, ...req.body };
    rooms.push(newRoom);
    writeJSON(FILENAME, rooms);
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(500).json({ message: "Failed to create room", error: err.message });
  }
};

export const updateRoom = (req, res) => {
  try {
    const rooms = readJSON(FILENAME);
    const index = rooms.findIndex(r => r.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Room not found" });

    rooms[index] = { ...rooms[index], ...req.body };
    writeJSON(FILENAME, rooms);
    res.json(rooms[index]);
  } catch (err) {
    res.status(500).json({ message: "Failed to update room", error: err.message });
  }
};

export const deleteRoom = (req, res) => {
  try {
    let rooms = readJSON(FILENAME);
    const exists = rooms.some(r => r.id === parseInt(req.params.id));
    if (!exists) return res.status(404).json({ message: "Room not found" });

    rooms = rooms.filter(r => r.id !== parseInt(req.params.id));
    writeJSON(FILENAME, rooms);
    res.json({ message: "Room deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete room", error: err.message });
  }
};
