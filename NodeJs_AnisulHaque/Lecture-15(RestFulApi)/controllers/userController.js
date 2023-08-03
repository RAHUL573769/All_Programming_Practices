
const express = require('express');
const app=express();
const path = require('path');
const getUsers=(req,res)=>{


        res.sendFile(path.join(__dirname,"../","views",'index.html'))
    
    
}
const createUser=(req,res)=>{

    try {
        const id=req.body.id;

    const name=req.body.name;
    const age=req.body.age;

    const newUser={
        id:id,
        name:name,
        age:age

    }
    
    res.status(200).send(newUser);
        
    } catch (error) {
        console.log(error);
        
    }


}

const getAllUsers=(req,res)=>{

  
    res.send(users);
}

const updateUsers=(req,res)=>{

const id=req.params.id;
newUser.filter((user)=>user.id===id);
console.log(newUser);

}

module.exports={getUsers,createUser,getAllUsers,updateUsers};