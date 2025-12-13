import express from "express";
import cors from "cors";

import appointmentsRouter from "./routes/appointments.js";
import roomsRouter from "./routes/rooms.js";
import eventsRouter from "./routes/events.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mount routers
app.use("/api/appointments", appointmentsRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/events", eventsRouter);

// Health check
app.get("/", (req, res) => res.send("Backend2 API is running 🚀"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
