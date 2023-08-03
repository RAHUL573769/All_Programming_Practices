const express = require('express');
const userRouter = require('./routes/initialRoutes');
const app=express();


// console.log(route);
app.use("/",userRouter)

module.exports={app};