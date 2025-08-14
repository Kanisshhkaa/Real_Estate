const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name:{type:String,default:null},
    email:{type:String,default:null},
    password:{type:String,default:null},
    contact:{type:String,default:null},
    userId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"users"},
    customerType:{type:Number,default:3},//1-admin,2-company,3-customer
    status:{type:String,default:"Accepted"},
    createdAt:{type:Date,default:Date.now()}
})

module.exports= new mongoose.model("customers",customerSchema);