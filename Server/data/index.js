 const mongoose = require('mongoose')


 async function condatabase(){
     return new Promise((resolve, reject)=>{
        // const url='mongodb://localhost:27017/deen'
        const url="mongodb+srv://naseeb:mukulramdev@cluster0.lx75t.mongodb.net/sai?retryWrites=true&w=majority"
        mongoose.connect(url,(err)=>{

            if(err){
                console.log(err)
                return reject(err);
            }

            console.log("database connceted")
            resolve()
        })

     })
 }

 module.exports=condatabase