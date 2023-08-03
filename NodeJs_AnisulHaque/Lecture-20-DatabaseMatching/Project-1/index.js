const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser=require("body-parser");
const path = require('path');
const mongoose = require('mongoose');
const dbUrl=process.env.Mongo_Url;
const User=require("./models/userModel")

const PORT=process.env.PORT ||3000;
const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({extended:true}));

app.use(express.json());
console.log(User);

mongoose.connect(dbUrl).then(()=>{
    console.log("Db Connected")
}).then((error)=>{
    console.log(error);
  
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'./','views','index.html'));
})
app.post("/register",async(req,res)=>{
  
try {
    const {email,password}=req.body;
   const newUser=new User({email,password});
  await newUser.save();
   res.status(200).json({newUser});

} catch (error) {
    console.log(error);

}


    // res.status(201).json({email,password})
})
app.post("/login",async(req,res)=>{
 
try {
    const {email,password}=req.body;
    const user=await User.findOne({email:email})
  if(user.email===email&&user.password===password){

    res.status(200).send("Valid User");
  }
  else{
    res.status(500).send("In Valid User");

  }
} catch (error) {
    console.log(error);
}


})

app.listen(PORT,()=>{
    console.log(`Server Running at ${PORT}`)
})



