const { response } = require("express");
const express = require("express");

const User = require("../data/user")



async function Addwish(req,res){
let id = req.params.id
let {item}=req.body
  await User.findOneAndUpdate({_id:id},{$push:{wishlist:item}}).then(e=>res.send({"cart":e.wishlist})).catch(e=>res.json({
    "response":"error",
    "status":"User not found"
 }))





}


async function Wishlist(req,res){

    let id = req.params.id

     await User.findOne({_id:id}).then(e=>res.send({"wishlist":e.wishlist})).catch(e=>res.send({
        "response":"error",
        "status":"User not found"
     }))

}  


async function Deletewish(req,res){

    let id = req.params.id
    let {item}=req.body
    console.log(item)
    
    await User.findByIdAndUpdate(id,{$pull:{wishlist:{ "productid": "12345678"}}}).then(e=>res.send({"wishlist":e.wishlist})).catch(e=>res.send({
        "response":"errr",
        "status":"User Not Found"
    }))
   

   
    }

    






module.exports={
    Wishlist,Addwish,Deletewish
}


