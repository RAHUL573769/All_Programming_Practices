const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
name:{
    type:String,trim:true
},
email:{
    type:String,trim:true
},
password:{
    type:String,trim:true
},
tc:{
    type:Boolean
}


})


const UserModel=mongoose.model('user',userSchema);
module.exports=UserModel;