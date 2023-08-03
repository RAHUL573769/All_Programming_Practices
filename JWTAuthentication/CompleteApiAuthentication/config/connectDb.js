const mongoose = require('mongoose');

const connectDb=async(URL)=>{

    try {
        
const DB_OPTIONS={
dbName:"shop"

}
await mongoose.connect(URL,DB_OPTIONS);
console.log("Db Connected");

    } catch (error) {
        console.log(error);
        console.log('Db Not Connected');
    }

}

module.exports=connectDb;