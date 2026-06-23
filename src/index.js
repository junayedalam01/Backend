import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js"; // Fixed: Removed curly braces for default export

// Fixed: Corrected path from './env' to './.env'
dotenv.config({
    path: './.env'
});

// Execute the connection
connectDB()
    .then(() => {
        console.log("Database connection sequence complete.");
    })
    .catch((err) => {
        console.error("Initialization failed: ", err);
    });