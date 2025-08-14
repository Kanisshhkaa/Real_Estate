const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    customerId:{type:mongoose.Schema.Types.ObjectId,ref:"customers"},
    propertyId:{type:mongoose.Schema.Types.ObjectId,ref:"properties"},
    advisorId:{type:mongoose.Schema.Types.ObjectId,ref:"advisors"},
    rating:{type:String,default:null},
    reviewMessage:{type:String,default:null},
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now},
})

module.exports = new mongoose.model("reviews",reviewSchema)