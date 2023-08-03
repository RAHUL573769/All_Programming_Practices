
const express = require('express');
const bodyParser=require("body-parser");
const path = require('path');

const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

// app.use(cors());



app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,'./',"views",'index.html'))
   
})

app.get("/circle",(req,res)=>{
res.sendFile(path.join(__dirname,'./',"views",'circle.html'))
   
})
app.post("/circle",(req,res)=>{
const radius=req.body.radius;
const area=(3.1416)*radius*radius;

res.send(`Area of Circle is ${area}` )
   
})

app.get("/triangle",(req,res)=>{
res.sendFile(path.join(__dirname,'./',"views",'triangle.html'))
   
})





app.listen(8000,()=>{
    console.log("Server Running")
})

