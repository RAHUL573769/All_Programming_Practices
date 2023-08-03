
const mongoose = require('mongoose');
var encrypt = require('mongoose-encryption');

const userSchema=mongoose.Schema({
email:{
    type:String,
   
},
password:{
    type:String,
  
},
createdOn:{
    type:Date,
    default:Date.now
}

    
})

var encKey = process.env.SOME_32BYTE_BASE64_STRING;

// encrypt age regardless of any other options. name and _id will be left unencrypted
userSchema.plugin(encrypt, { secret: encKey, encryptedFields: ['password'] });
const User=mongoose.model("user",userSchema);
module.exports=User;