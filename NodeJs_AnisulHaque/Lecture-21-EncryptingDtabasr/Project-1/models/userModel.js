
const mongoose = require('mongoose');

var encrypt = require('mongoose-encryption');
const userSchema=new mongoose.Schema({
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
createdOn:{
    type:Date,
    default:Date.now
}

    
})


const User=mongoose.model("user",userSchema);
const encKey=process.env.ENC_KEY;
// exclude age from encryption, still encrypt name. _id will also remain unencrypted
userSchema.plugin(encrypt, { secret: encKey, excludeFromEncryption: ['password'] });
module.exports=User;