const mongoose = require('mongoose');

require('dotenv').config();


const connectDb=async()=>{

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/passportDb');
        console.log("Db is Connected");
    
    } catch (error) {
        console.log("Db is Not Connected");
        console.log(error.message);
        process.exit(1);
    }
}

module.exports=connectDb;