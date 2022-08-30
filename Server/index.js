const express =require("express")
const cors= require('cors')
const bodyparser=require("body-parser")
const dataconnect= require('./data/index')

const {
    logged,login,createuser
 }= require('./controllers/user')
const addpro = require("./controllers/products")
 
const app= express()
app.use(bodyparser.json())
app.use(cors())
app.get('/',(r,r)=>{
    resizeBy.send("Deen Shah Scion")
})
app.post('/reg',createuser)
app.post('/log',login)
app.post('/reg',logged)
app.post('/addpro',addpro)












console.log(dataconnect)

dataconnect().then(()=>{
    app.listen(5000, (err)=>{
        if(err)
        console.log(err)
        else
        console.log("server is listen 5000")
    })
})




