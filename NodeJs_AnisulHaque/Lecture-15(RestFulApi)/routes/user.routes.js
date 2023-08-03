const express = require('express');
const router=express.Router();
const path = require('path');
const { getUsers, createUser, getAllUsers, updateUsers } = require('../controllers/userController');


router.get("/",getUsers)

router.post("/", createUser)

router.put("/update/:id",updateUsers);
router.get("*",(req,res)=>{
    res.status(404).send("<h1>404 Not Found</h1>")
})

module.exports=router;