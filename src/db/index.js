import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";
import colors from "colors";


const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Database connsction success".bgGreen);
    } catch (error) {
        console.log(`Database connection failed. ${error.message}`.bgRed);
        process.exit(1);
    }
};

export default connectDB;