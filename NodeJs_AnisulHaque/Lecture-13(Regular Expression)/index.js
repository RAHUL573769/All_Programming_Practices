require('dotenv').config();
const express = require('express');


const app=express();
const PORT=process.env.PORT ||8000;

app.get("/",(req,res)=>{


    res.send("hELLO")
})
app.get("/products/:id([0-9]*)",(req,res)=>{


    res.send(`Id is ${req.params.id}`)
})

// app.use("*",(req,res)=>{
//     res.status(404).send({
//        message: "<h1>404 </h1>"
//     })
// })

app.listen(PORT,(req,res)=>{

    console.log(`Server Running on Port ${PORT}`)
})