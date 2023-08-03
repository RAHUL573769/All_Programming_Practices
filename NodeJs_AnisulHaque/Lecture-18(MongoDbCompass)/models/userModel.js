const mongoose = require('mongoose');


const userSchema=new mongoose.Schema(
    {
       
        title:String,
        price:Number,
        description:String,

    }
)

const User=mongoose.model("users",userSchema);

module.exports=User;
