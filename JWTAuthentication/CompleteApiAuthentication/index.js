require('dotenv').config()
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const userController = require('./controllers/userController');

const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const  connectDb= require('./config/connectDb');

const PORT=process.env.PORT||3000;
const DATABASE_URL=process.env.DATABASE_URL;
const app=express();


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/user",userRoutes);

app.listen(PORT,()=>{
 
connectDb(DATABASE_URL);
    console.log(`Server Listening ${PORT}`)
})

