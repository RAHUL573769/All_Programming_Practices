const express = require('express');

const router=express.Router();

router.use(express.json());
router.get("/",(req,res)=>{
    res.send("Thhis is Get Request");
})
router.get("/post",(req,res)=>{
    res.send("Thhis is Post Request");
})


module.exports=router;