const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
const PORT=process.env.PORT||8000
const path = require('path');
const userRouter=require("./routes/userRoutes.js")

const app=express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());


app.use("/",userRouter)

app.listen(PORT,()=>{
    console.log(`Server is Running at ${PORT}`)
})
