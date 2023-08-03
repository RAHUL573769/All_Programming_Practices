const express = require('express');
const app=express();
const mongoose = require('mongoose');


app.use(express.json());
app.use(express.urlencoded({extended:true}))
const shopSchema=new mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    ratings:Number
        

})

const Shop=mongoose.model("Shops",shopSchema);
const connectDb=async()=>{










try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test1');
    console.log("Db is Connected");
    
} catch (error) {
    console.log(error);
}


}
app.post("/shops",async(req,res)=>{
    // enteredTitle=req.body.title,

    // enteredPrice=req.body.price,

    // enteredDesc=req.body.description,

    // enteredRatings=req.body.ratings,

   
    // console.log(enteredDesc,enteredPrice,enteredRatings,enteredTitle);

    try {

       
    const userData=new Shop({
        enteredTitle:req.body.title,

         enteredPrice:req.body.price,
    
         enteredDesc:req.body.description,
    
         enteredRatings:req.body.ratings,

    })
    
const data=await userData.save();
res.status(200).send(data);

        
    } catch (error) {
       console.log(error); 
    }
})
app.get("/",async(req,res)=>{
    await connectDb();
    res.send("Hello From NodeJs");
})
app.listen(3000,(req,res)=>{
    console.log("Server Running");
})