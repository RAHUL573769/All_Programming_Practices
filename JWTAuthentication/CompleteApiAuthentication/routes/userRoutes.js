const express = require('express');
const router=express.Router();
const userController = require('../controllers/userController');

router.get("/register",(req,res)=>{
    console.log("Hello")
});
router.post("/register",userController.userRegistration);
router.post("/login",userController.userLogin);




module.exports=router;