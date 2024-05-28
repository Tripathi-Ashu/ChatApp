import express from "express";    
import dotenv from "dotenv"; 
import mongoose, { Mongoose } from "mongoose";
const app = express();

dotenv.config();  
const PORT = process.env.PORT || 4001;
const URL = process.env.MONGODB_URL; // cpnnection of env 

try{
    mongoose.connect(URL)
    console.log("Connected to MongoDB") // ye humko ye bata  rha hai ki hum apne data base ke sath connect ho chuke hao 
}catch(error){
    console.log(error)
}

app.listen(PORT,() =>{
    console.log (`Example app Listening ao port ${PORT}`)
});


