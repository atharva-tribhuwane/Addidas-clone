


const User = require("../data/user")



async function AddAddress(req,res){
let id = req.params.id
let item=req.body
  await User.findOneAndUpdate({_id:id},{$push:{address:item}}).then(e=>res.send({"Address":e.Address})).catch(e=>res.json({
    "response":"error",
    "status":"User not found"
 }))





}


async function Address(req,res){

    let id = req.params.id

     await User.findOne({_id:id}).then(e=>res.send({"Address":e.address})).catch(e=>res.send({
        "response":"error",
        "status":"User not found"
     }))

}  


async function DeleteAddress(req,res){

    let id = req.params.id
    let item=req.body
    console.log(item)
    
    await User.findByIdAndUpdate(id,{$pull:{address:item}}).then(e=>res.send({"Address":e.Address})).catch(e=>res.send({
        "response":"errr",
        "status":"User Not Found"
    }))
   

   
    }

    






module.exports={
    Address,AddAddress,DeleteAddress
}


