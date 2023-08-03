const express = require('express');
const mongoose = require('mongoose');

const app=express();
app.use(express.json());

const userRouter=require('./routes/userRouter')
const userModel=require("./models/userModel.js");
const connectDb=async()=>{

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/myUser');
    console.log("Db is Connected");

} catch (error) {
    console.log("Db is Not Connected");
    console.log(error.message);
    process.exit(1);
}

}
console.log(userModel);
app.use("/",userRouter)

app.listen(3000,async (req,res)=>{
    await connectDb();
    console.log("Server is Listening");
})
