const express =require("express")
const bodyparser=require("body-parser")
const dataconnect= require('./data/index')
const app= express()













console.log(dataconnect)

dataconnect().then(()=>{
    app.listen(5000, (err)=>{
        if(err)
        console.log(err)
        else
        console.log("server is listen 5000")
    })
})




