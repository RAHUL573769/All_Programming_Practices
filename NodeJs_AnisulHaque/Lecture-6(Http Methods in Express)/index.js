const express = require('express');


const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Thhis is Get Request");
})
app.post("/post",(req,res)=>{
    res.send("Thhis is Post Request");
})
app.listen(3000,()=>{

    console.log("Server Runnig");
})