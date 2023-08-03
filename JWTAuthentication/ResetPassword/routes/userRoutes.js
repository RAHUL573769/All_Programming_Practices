const express = require('express');
const router=express.Router();
const mongoose = require('mongoose');

const userController = require('../controllers/userController');





//public routes

router.get("/register",(req,res)=>{
    res.send("Hello")
})
router.post("/register", userController.userRegistration);




//protected


module.exports=router;