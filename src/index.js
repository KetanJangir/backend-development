import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { db_name } from "./constants.js";
import connectDb from "./db/dbConnection.js";

dotenv.config({
    path:'./.env'
});
const app = express();
const port = process.env.PORT;

connectDb();

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

// (async()=>{
//     try{
//         const dbConnection = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
//         console.log("mongoDB connected successfully",dbConnection.connection.host);

//         app.on("error",(error)=>{
//             console.error("Error",error)
//         });
//         app.listen(port,()=>{
//             console.log(`server is running on port ${port}`);
//         })
//     }catch(error){
//         console.log("MongoDb connection error : ",error);
//     }
// })()
