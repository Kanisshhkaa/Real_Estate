const mongoose = require("mongoose")

const advisorSchema = new mongoose.Schema({
    name:{type:String,default:null},
    email:{type:String,default:null},
    password:{type:String,default:null},
    gender:{type:String,default:null},
    contact:{type:String,default:null},
    advisorImage:{type:String,default:null},
    userId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"users"},
    advisorType:{type:Number,default:2},//1-admin,2-company,3-customer
    status:{type:String,default:"Accepted"},
    createdAt:{type:Date,default:Date.now()}
})

module.exports= new mongoose.model("advisors",advisorSchema);