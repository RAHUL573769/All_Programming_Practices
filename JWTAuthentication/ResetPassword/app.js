const connectDb=require("./config/connectDb");
const express = require('express');
var bodyParser = require('body-parser')
require('dotenv').config();
var jwt = require('jsonwebtoken');
const PORT=process.env.PORT||3000;
const cors = require('cors');

const userRouter = require('./routes/userRoutes');



const DATABASE_URL='mongodb://localhost:27017';


// connectDb(DATABASE_URL);

const app=express();

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())
app.use(express.json());
app.use(cors());
app.use("/api/user",userRouter);
app.listen(PORT,()=>{
    
    connectDb(DATABASE_URL);

    console.log(`Port is running at ${PORT}`)
})