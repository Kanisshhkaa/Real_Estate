const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    categoryName:{type:String,default:null},
    categoryImage:{type:String,default:null},
    description:{type:String,default:null},
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now}
})

module.exports = new mongoose.model("categories",categorySchema);