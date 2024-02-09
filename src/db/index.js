import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});

console.log(process.env.MONGODB_URI)

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`Database connection success`.bgGreen);
    } catch (error) {
        console.log(`Database connection failed. ${error}`.bgRed);
        process.exit(1);
    }
};

export default connectDB;