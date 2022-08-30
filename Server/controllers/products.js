const express = require("express");
const Product= require('../data/prouduct')

 async function addpro(req,res){
let{

    pro_name,
pro_img
,
categeory,
sub_cat,
price,
reviwes,
pro_det,
pro_dis,

 
}=req.body


Product.create({


    pro_name:
    pro_name,
pro_img:pro_img
,
categeory:categeory,
sub_cat: sub_cat,
price: price,
reviwes:reviwes,
pro_det:pro_det,
pro_dis: pro_dis,

 

})

res.send({"response":"successfully"})

 }


 module.exports=addpro