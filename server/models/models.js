const mongoose=require("mongoose")
const Schema= new mongoose.Schema({

    name:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:true
        
    },
    password:{
        type:String,
        required:true
    }
})

const Model= mongoose.model("employees",Schema);
module.exports=Model;