import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

// DATABASE CALLED
connectDB();