const express = require('express');
const router=express.Router();
const path = require('path');
const users=require("../models/userModel")

//home route
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','index.html'))
})

//router not found

router.get("/users",(req,res)=>{
    res.status(200).json({users})
})

router.post("/userPost",(req,res)=>{
    console.log(req.body);
 const createUser={
    id:req.body.id,
    username:req.body.username,
    email:req.body.email
 };
 users.push(createUser);
 res.status(200).json(users);

})
router.put("/update/:id",(req,res)=>{
    const userId=req.params.id;

    const {username,email}=req.body;
  
    const updated=users.filter((user)=>user.id===userId)
    .map((selectedUser=>{
        selectedUser.username=username;
        selectedUser.email=email;
    }));
  
    res.status(200).json(users);
})
router.use((req,res,next)=>{
    res.status(404).send("<h1>404 Not Found</h1>")
})

module.exports=router;