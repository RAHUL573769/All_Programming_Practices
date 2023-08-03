const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParer=require("body-parser");
require('dotenv').config()
const PORT=process.env.PORT;
const usersRouter=require("./routes/user.routes")
console.log(usersRouter);
const app=express();
app.use(cors());
app.use(bodyParer.urlencoded({extended:true}));
app.use(express.json());

app.use("/",usersRouter);
// app.get("/",(req,res)=>{

//     res.sendFile(path.join(__dirname,'./views','index.html'))

// })
// app.get("*",(req,res)=>{
//     res.status(404).send("<h1>404 Not Found</h1>")
// })

app.listen(PORT,()=>{
    console.log("Server Running");
})
