const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    propertyId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"properties"},
    customerId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"customers"},
    advisorId:{type:mongoose.Schema.Types.ObjectId,default:null,ref:"advisors"},
    status:{type:String,default:"Pending"},
    createdAt:{type:Date,default:Date.now()}
})

module.exports= new mongoose.model("bookings",bookingSchema);