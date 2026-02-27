import dotenv from "dotenv";
import connectDb from "./db/dbConnection.js";
import app from "./app.js"

dotenv.config({
    path:'./.env'
});
const port = process.env.PORT;

//connecting database
connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    });
    app.on("error",(error)=>{
        console.log("Error",error);
    })
}).catch((error)=>{
    console.error("MongoDB connection error",error)
});


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
