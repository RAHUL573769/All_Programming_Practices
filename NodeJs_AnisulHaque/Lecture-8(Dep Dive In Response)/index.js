const express = require('express');
const  userRouter = require('./routes/user.route');



const app=express();
app.use("/user",userRouter);
app.listen(3000,()=>{

    console.log("Server Runnig");
})