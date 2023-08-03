const fs = require('fs');

fs.writeFile("demo.txt","this is wfirst text",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Succesfull")
    }
})
fs.rename("demo.txt","demo2.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Succesfull")
    }
})

fs.readFile("demo.txt",'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data)
    }
})
fs.appendFile("demo.txt",'/nThis is updated/n',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Done")
    }
})
fs.unlink("demo2.txt",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Done")
    }
})