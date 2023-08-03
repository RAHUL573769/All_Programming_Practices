const mongoose = require('mongoose');

const UserModel = require('../models/user');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserController{

    static userRegistration= async(req,res)=>{
const {name,email,password,password_confirmation,tc}=req.body;
const user=await UserModel.findOne({email:email});
if(user){

    res.send({"status":"failed","message":"Email already exists"})
}

else{
    if(name&&email&&password&&password_confirmation&&tc){

        try {
            const salt=await bcrypt.genSalt(40);

            const hashPssword=await bcrypt.hash(password,salt);
            if(password===password_confirmation){
            const doc=new UserModel({
                name:name,
                email:email,
                password:hashPssword,
                tc:tc
            })
            await doc.save();
            }    
        } catch (error) {
            res.send({"status":"failed",message:"Ub able to Rgister"});
        }






    }
    else{
        res.send({"status":"failed","message":"Please Enter Value ..All Fields required"})
    }
}
    }
}
module.exports= UserController