import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import userRoutes from "./routes/userRoutes.js"
import carpenterRoutes from "./routes/carpenterRoutes.js";
import slotRoutes from "./routes/slotRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
dotenv.config(); // Correct way to use dotenv with ES modules




const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/carpenters", carpenterRoutes);
app.use("/api/slots", slotRoutes);
app.use("/api/bookings", bookingRoutes);

const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log("Database connection error:", error));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
