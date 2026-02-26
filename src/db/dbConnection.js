import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDb = async() => {
    try{
        const dbConnection = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
        console.log("mongoDb connected successfully",dbConnection.connection.host);
    }catch(error){
        console.error("mongoDb connection failed : ",error);
    }
}

export default connectDb;