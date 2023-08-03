require('dotenv').config();

// require("./config/passport");
const express = require('express');
const bodyParser=require("body-parser");
const cors = require('cors');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const session = require('express-session');
const PORT=process.env.PORT||3000;
const mongoose = require('mongoose');
const connectDb=require("./config/database")
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);
const app=express();


const User=require("./models/userModel");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors());
app.set("view engine","ejs");

//session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create(

{    mongoUrl:process.env.MONGO_URL,
    collectionName:session,
}
  )
//   cookie: { secure: true }
}))
//session

//passport

app.use(passport.initialize());
app.use(passport.initialize());

//end of passport
app.get("/",(req,res)=>{
    res.render('index');
})
//register get
app.get("/register",(req,res)=>{
    res.render("register")
})

    
    
app.post("/register",async(req,res)=>{
    try {
   
const user=await User.findOne({userName:req.body.username});
// console.log(req.body.username)
// console.log(req.body.password)
if(user){
   return res.send("User Already Exists");
}
else{

        bcrypt.hash(req.body.password, salt, async(err, hash)=> {
            const newUser=new User({

                userName:req.body.username,
                password:hash
                
                
                  });
                  await newUser.save(); 
        });
   
 
    res.redirect('/login');;

}
  


    } catch (error) {
      res.status(500).send(error.message);
      console.log("Erroe")  
    }
})
//mongosse connection

//login get
app.get("/login",(req,res)=>{
    res.render("login")
})
//logour get
app.get("/logout",(req,res)=>{
    res.redirect('/');
})

// app.post("/login",(req,res)=>{
//     try {
//         res.status(200).send("User is logged In");
//     } catch (error) {
//       res.status(500).send(error.message);  
//     }
// })

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login',successMessage:'/profile' }),
  function(req, res) {
    res.redirect('/');
  });


//protected profile

app.get("/profile",(req,res)=>{
    res.render("profile")
})

app.listen(PORT,()=>{
    connectDb();
    console.log("Port Running");
})