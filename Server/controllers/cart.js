const { response } = require("express");
const express = require("express");

const User = require("../data/user")



async function AddCart(req,res){
let id = req.params.id
let {item}=req.body
  await User.findOneAndUpdate({_id:id},{$push:{cart:item}}).then(e=>res.send({"cart":e.cart})).catch(e=>res.json({
    "response":"error",
    "status":"User not found"
 }))





}


async function Cart(req,res){

    let id = req.params.id

     await User.findOne({_id:id}).then(e=>res.send({"cart":e.cart})).catch(e=>res.send({
        "response":"error",
        "status":"User not found"
     }))

}  


async function DeleteCart(req,res){

    let id = req.params.id
    let {item}=req.body
    console.log(item)
    
    await User.findByIdAndUpdate(id,{$pull:{cart:{ "productid": "12345678"}}}).then(e=>res.send({"cart":e.cart})).catch(e=>res.send({
        "response":"errr",
        "status":"User Not Found"
    }))
   

   
    }

    






module.exports={
    Cart,AddCart,DeleteCart
}


