const express = require('express');

const app=express();


app.get("/",(req,res)=>{
    res.send("This is a Route");
})

app.listen(3000,()=>{
console.log("Server Running");

})