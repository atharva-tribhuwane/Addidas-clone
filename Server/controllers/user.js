 const express = require("express");

const User = require("../data/user")
const  bcrypt = require("bcryptjs")
const jwt= require('jsonwebtoken')



 async function createuser(req,res){
     let {email,name,password}=req.body
    var new_user= new User({
       email:email,
       password:bcrypt.hashSync(password,10),
       name:name

})
new_user.save((err,result)=>{
   return res.send(err||result)
})




}
async function login(req,res){
   console.log(req.body)
   let{ email,password}=req.body


   var new_user=  await User.findOne({email:email})
   console.log(new_user)
if(!new_user)
return res.send({error:"User Not Found !"})

var mathed= bcrypt.compareSync(password,new_user.password)
if(mathed)
return res.send({name:new_user.name,
   email:new_user.email,
   id:new_user._id,
   token:jwt.sign({name:new_user.name,
      email:new_user.email,
      id:new_user._id},"deenshah")
})

return res.send({error:"Invalid credentials !"})
    



    
     }

    
     
     async function logged(req,res){
        console.log(req.body)
        
        
        
         }
 module.exports={
    logged,login,createuser
 }