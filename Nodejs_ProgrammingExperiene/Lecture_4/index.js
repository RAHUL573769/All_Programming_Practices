const express = require('express');

const app=express();


app.get("/",(req,res)=>{
    res.send("This is a Route");
})

app.get("/:id",(req,res,next)=>{
    const id=req.params.id;

    res.send("User Id is ",id);
    next();
})

app.listen(8000,()=>{
console.log("Server Running");

})