const express = require('express');
const multer = require('multer');
const path = require('path');

const app=express();
const PORT=3000;
//



//file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads') //in upload folder
    },
    filename: function (req, file, cb) {
const name=Date.now()+'-'+file.originalname; //file name

cb(null,name);

    }
  })
  
  const upload = multer({ storage: storage })

  //file upload

  
app.get("/",(req,res)=>{
    res.status(200).send("Testing Api");
})
app.get("/register",(req,res)=>{
   res.sendFile(path.join(__dirname,'./','index.html'));
})
app.post("/register",upload.single("name"), (req,res)=>{
    res.status(200).send("File Uploaded");
})
app.listen(PORT,(req,res)=>{
    console.log("Server Running");
})