import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.ts";
// import authRoutes from "./routes/auth.routes.ts";
import { json } from "express";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(json());

// Routes
app.use("/api/auth", () => {});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
