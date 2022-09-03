const express =require("express")
const cors= require('cors')
const bodyparser=require("body-parser")
const dataconnect= require('./data/index')

const {
    logged,login,createuser
 }= require('./controllers/user')


 const {Cart,AddCart, DeleteCart}= require('./controllers/cart')
  const{Address,AddAddress,DeleteAddress}= require('./controllers/address')
  const{Wishlist,Addwish,Deletewish}= require('./controllers/wishlist')
const {addpro,Allproduct,Productquery,Byid,Searchpro} = require("./controllers/products")
const { application } = require("express")
 
const app= express()
app.use(bodyparser.json())
app.use(cors())
app.get('/',(r,res)=>{
    res.send("Deen Shah Scion")
})
app.post('/reg',createuser)
app.post('/log',login)
app.get('/reg',logged)
app.post('/addpro',addpro)
app.get('/cart/:id',Cart)
app.post('/addcart/:id',AddCart)
app.post('/deletecart/:id',DeleteCart)
app.get('/pro',Allproduct)
app.get('/pq',Productquery)
app.get('/proid/:id',Byid)
app.get('/prosearch/:name',Searchpro)
app.get('/add/:id',Address)
app.post('/add/:id',AddAddress)
app.delete('/deleteadd/:id',DeleteAddress)
app.get('/wish/:id',Wishlist)
app.post('/wish/:id',Addwish)
app.delete('/deletewish/:id',Deletewish)










console.log(dataconnect)

dataconnect().then(()=>{
    app.listen(5000, (err)=>{
        if(err)
        console.log(err)
        else
        console.log("server is listen 5000")
    })
})




