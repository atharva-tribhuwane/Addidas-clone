const mongoose = require('mongoose')


let  User= mongoose.Schema({
   email:String,
   name: String,
   password: String,
   mobile: Number,
   dateofbirth: Date,
   address:[Object],
   preference:[String],
   wishlist:[Object],
   cart:[Object],
orders:[Object]

})
const Users=mongoose.model('User',User)
module.exports=Users