import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import authRoutes from "./routes/auth.routes";
import labRoutes from "./routes/lab.routes";
import roomRoutes from "./routes/room.routes";
import bookingRoutes from "./routes/booking.routes";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/auth", authRoutes);
app.use("/labs", labRoutes);
app.use("/rooms", roomRoutes);
app.use("/bookings", bookingRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Data Source initialized!");
  })
  .catch((err) => console.error("Error initializing data source:", err));

export default app;
