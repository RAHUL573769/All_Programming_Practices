
const passport = require('passport');

const LocalStrategy=require("passport-local")


const User=require("../models/userModel");
var bcrypt = require('bcryptjs');
passport.use(new LocalStrategy(
    async(username, password, done)=> {
        try {
            const user=await User.findOne({username:username});

            if (!user) { 
                return done(null, false,{message:"Incorrect User Name"}); 
            }
            if(!bcrypt.compare(password,user.password)){
                return done(null, false,{message:"Incorrect Password"}); 
            }
            else{
                return done(null, user);
            }
            
        } catch (error) {
            return done(err);
        }
passport.serializeUser((user,done)=>{
    done(null,user.id)
});
passport.deserializeUser(async(id,done)=>{
    try {
        const user=await User.findById(id);
        done(null,user)
    } catch (error) {
     done(error)   
    }
})


    //   User.findOne({ username: username }, function (err, user) {
    //     // if (err) { return done(err); }
    //     // if (!user) { return done(null, false); }
    //     if (!user.verifyPassword(password)) { return done(null, false); }
    //     // return done(null, user);
    //   });
    }
  ));