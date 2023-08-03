const express = require('express');
const path = require('path');

const app=express();

const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());

app.get("/",(req,res)=>{

    res.send("Hello");
})
app.post("/users",(req,res)=>{
console.log(req.body.name);
})
app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,'./',"views",'index.html'))

})

app.post("/register",(req,res)=>{
console.log(req.body)
res.redirect("/")
})
app.get("/user/:id/age/:age",(req,res)=>{
    const id=req.params.id;
    console.log(req.params.age);

    res.send(`Student id is ${id}`)
    console.log(id);
})
app

app.listen(3000,(req,res)=>{
    console.log("Server Running");

})