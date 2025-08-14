const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    name:{type:String,default:null},
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:"categories"},
    cityId:{type:mongoose.Schema.Types.ObjectId,ref:"cities"},
    propertyImage:{type:String,default:null},
    area:{type:String,default:null},
    price:{type:String,default:null},
    rooms:{type:String,default:null},
    washroom:{type:String,default:null},
    garage:{type:String,default:null},
    propertyType:{type:String,default:null},
    advisorId:{type:mongoose.Schema.Types.ObjectId,ref:"advisors"},
    status:{type:String,default:"Accept"},
    dealerstatus:{type:String,default:"Active"},
    createdAt:{type:Date,default:Date.now}
})

module.exports = new mongoose.model("properties",propertySchema);