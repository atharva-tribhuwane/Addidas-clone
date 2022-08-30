const express =require("express")
const bodyparser=require("body-parser")
const dataconnect= require('./data/index')
const {
    logged,login,createuser
 }= require('./controllers/user')
const app= express()
app.use(bodyparser.json())

app.post('/reg',createuser)
app.post('/log',login)
app.post('/reg',logged)












console.log(dataconnect)

dataconnect().then(()=>{
    app.listen(5000, (err)=>{
        if(err)
        console.log(err)
        else
        console.log("server is listen 5000")
    })
})




