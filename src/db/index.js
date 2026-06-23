import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';

// Removed 'express' and 'app' since this is a dedicated DB config file
// Removed 'dotenv.config()' assuming it is loaded at the top of your main index.js

const connectDB = async () => {
    try {
        // Appending the authSource parameter directly to prevent the local auth error
        const connectionDB = await mongoose.connect(`${process.env.URL}/${DB_NAME}?authSource=admin`);
        console.log(`\n☘️ MongoDB connected || Host: ${connectionDB.connection.host}`);
    }
    catch (error) {
        console.error("MONGODB connection error: ", error);
        process.exit(1);
    }
};

export default connectDB;










// ;(async()=>{

//     try{
//      await mongoose.connect(`${process.env.URL}/${DB_NAME}`)
//      app.on("error",()=>{
//         console.log("ERROR: ",error);
//         throw error
//      })
//      app.listen(process.env.PORT,()=>{
//         console.log(`App run ${process.env.PORT}`)
//      })
//     }
//     catch(error){
//         console.log("ERROR: ",error);
//     }
// })()
