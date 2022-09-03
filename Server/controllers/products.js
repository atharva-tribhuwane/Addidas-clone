const { response } = require("express");
const express = require("express");
// const Products = require("../data/prouduct");
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



 async function Allproduct(req,res){

     Product.find( (err,data)=>{
        if(err)
        return res.send(err)
        else if(data)
        return res.send(data)
     })


 }


 async function Productquery(req,res){
console.log(req.query)
    Product.find( (err,data)=>{
       if(err)
       return res.send(err)
       else if(data)
       return res.send(data)
    })


}


async function Byid(req,res){

    Product.find({_id:req.params.id} ,(err,data)=>{
       if(err)
       return res.send(err)
       else if(data)
       return res.send(data)
    })


}

async function Searchpro(req,res){
var sai=req.params.name
    Product.find({$or:[{pro_name:{$regex:sai}},{sub_cat:{$regex:sai}}]}).then(e=>res.send({
        e:e
    })).catch(e=>res.send({
        e:e
    }))

    


}




 
 module.exports={addpro,Allproduct,Productquery,Byid,Searchpro}