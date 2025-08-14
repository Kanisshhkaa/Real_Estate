const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{type:String,default:null},
    email:{type:String,default:null},
    password:{type:String,default:null},
    customerId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"customers"},
    advisorId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"advisors"},
    userType:{type:Number,default:3},//1-admin,2-company,3-customer
    status:{type:String,default:"Accepted"},
    createdAt:{type:Date,default:Date.now()}
})

module.exports= new mongoose.model("users",userSchema);