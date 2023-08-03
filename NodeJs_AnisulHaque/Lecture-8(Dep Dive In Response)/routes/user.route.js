const express = require('express');
const path = require('path');

const router=express.Router();

router.use(express.json());
router.get("/",(req,res,next)=>{
    // res.status(200).send("Thhis is Get Request");
    res.sendFile(path.join(__dirname,'../',"views","services.html"))
    // res.redirect("/ligin")
})
router.get("/post",(req,res)=>{
    res.send("Thhis is Post Request");
})


module.exports=router;