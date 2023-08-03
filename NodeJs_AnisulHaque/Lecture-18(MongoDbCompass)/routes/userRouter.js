const express = require('express');
const router=express.Router();
const model=require("../models/userModel.js")


router.get("/",(req,res)=>{
    res.send("Hello From Nodejs")
})

router.get("/user/:id",async(req,res)=>{
    try {
       
    const id=req.params.id;
    const userData=await model.find({_id:id});
    res.send(userData); 
    } catch (error) {
       
res.status(500).send({message:error.message})    }



    
})
router.post("/user",async(req,res)=>{
try {

const newData= new model({
    title:req.body.title,
     price:req.body.price,
     description:req.body.description,
   

}),
 userData=await newData.save();
res.status(200).send(userData);
   




} catch (error) {
   
    res.status(500).send({message:error.message})
}

})
module.exports=router;