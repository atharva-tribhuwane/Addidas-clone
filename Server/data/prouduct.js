 const mongoose = require('mongoose')


 let  Pro= mongoose.Schema({
pro_name:String,
pro_img:[String]
,
categeory:String,
sub_cat: String,
price: Number,
reviwes:[Object],
pro_det:String,
pro_dis: String,

 })
const Products=mongoose.model('Product',Pro)
module.exports=Products