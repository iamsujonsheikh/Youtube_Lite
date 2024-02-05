import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config();

const port = process.env.PORT || 8000;

// DATABASE CALLED
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running on ${port}`.bgCyan)
        })
    })
    .catch((err) => {
        console.log(`MONGODB CONNECTION FAILED !${err}`.bgRed)
    });