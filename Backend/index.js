import express from "express";    
import dotenv from "dotenv"; 
import mongoose, { Mongoose } from "mongoose";

import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();  

//middleware
app.use(express.json());


const PORT = process.env.PORT || 4001;
const URL = process.env.MONGODB_URL; // cpnnection of env 

try{
    mongoose.connect(URL)
    console.log("Connected to MongoDB") // ye humko ye bata  rha hai ki hum apne data base ke sath connect ho chuke hao 
}catch(error){
    console.log(error)
}

//route
app.use("/user", userRoute);

app.listen(PORT,() =>{
    console.log (`Example app Listening ao port ${PORT}`)
});


