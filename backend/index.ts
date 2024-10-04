import express, { Express } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.ts";
import authRoutes from "./routes/auth.routes.ts";
import { json } from "express";

dotenv.config();

const app: Express = express();

app.use(json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
  connectDB();
});
