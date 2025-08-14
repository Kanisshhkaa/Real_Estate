const property = require("./propertyModel")

add=(req,res)=>{
    validationError=[]
    if(!req.body.name){
        validationError.push("Name is required")
    }
    
    if(!req.body.categoryId){
        validationError.push("CategoryId is required")
    }
    if(!req.file){
        validationError.push("property Image is required")
    }
    if(!req.body.area){
        validationError.push("Area is required")
    }
    if(!req.body.price){
        validationError.push("Price is required")
    }
    if(!req.body.rooms){
        validationError.push("Rooms is required")
    }
    if(!req.body.washroom){
        validationError.push("Washroom is required")
    }
    if(!req.body.garage){
        validationError.push("Garage is required")
    }
    if(!req.body.propertyType){
        validationError.push("propertyType is required")
    }
    if(!req.body.advisorId){
        validationError.push("advisorId is required")
    }
    if(!req.body.cityId){
        validationError.push("City Id is required")
    }
    if(validationError.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation Error",
            errors:validationError
        })
    }
    else{
        property.findOne({name:req.body.name})
        .then((propertyData)=>{
            if(!propertyData){
                let propertyObj = new property()
                propertyObj.name=req.body.name
                propertyObj.categoryId=req.body.categoryId
                propertyObj.propertyImage="Properties/"+req.file.filename
                propertyObj.area=req.body.area
                propertyObj.price=req.body.price
                propertyObj.rooms=req.body.rooms
                propertyObj.washroom=req.body.washroom
                propertyObj.garage=req.body.garage
                propertyObj.propertyType=req.body.propertyType
                propertyObj.advisorId=req.body.advisorId
                propertyObj.cityId=req.body.cityId
                propertyObj.save()

                .then((resSave)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data added Successfully",
                        data:resSave
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal Server Error",
                        errors:err.message
                    })
                })
            }
            else{
                res.json({
                    status:500,
                    success:false,
                    message:"data already exists",
                    data:propertyData
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error",
                errors:err.message
            })
        })
    }
}

getall =  async(req,res)=>{
    const totalCount = await property.countDocuments(req.body).exec()
    property.find(req.body).populate("advisorId").populate("cityId").populate("categoryId")
    .then((propertyData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully",
            data:propertyData,
            count:totalCount
        })
    })
    .catch((err)=>{
        res.json({
            status:500,
            success:false,
            message:"Internal Server Error",
            errors:err.message
        })
    })
}

getSingleData = (req,res)=>{
    validationError=[]
    if(!req.body._id){
        validationError.push("Id is required")
    }
    if(validationError.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation Error",
            errors:validationError
        })
    }
    else{
        property.findOne({_id:req.body._id})
        .then((propertyData)=>{
            if(!propertyData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                res.json({
                    status:200,
                    success:true,
                    message:"Data Loaded Successfully",
                    data:propertyData
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error",
                errors:err.message
            })
        })
    }
}

deleteData = (req,res)=>{
    validationError=[]
    if(!req.body._id){
        validationError.push("ID is required")
    }
    if(validationError.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation Error",
            data:validationError
        })
    }
    else{
        property.findOne({_id:req.body._id})
        .then((propertyData)=>{
            if(!propertyData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found",
                })
            }
            else{
                property.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted Successfully",
                        data:propertyData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal Server Error",
                        errros:err.message
                    })
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:true,
                message:"Internal Server Error",
                errors:err.message
            })
        })
    }
}


updateData = (req,res)=>{
    validationError=[]
    if(!req.body._id){
        validationError.push("ID is required")
    }
    if(validationError.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation Error",
            data:validationError
        })
    }
    else{
        property.findOne({_id:req.body._id})
        .then((propertyData)=>{
            if(!propertyData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                if(req.body.name){
                    propertyData.name = req.body.name
                }
                if(req.file){
                    propertyData.propertyImage = "Properties/" + req.file.filename
                }
                if(req.body.categoryId){
                    propertyData.categoryId = req.body.categoryId
                }

                if(req.body.area){
                    propertyData.area = req.body.area
                }
                if(req.body.price){
                    propertyData.price = req.body.price
                }
                if(req.body.rooms){
                    propertyData.rooms = req.body.rooms
                }
                if(req.body.washroom){
                    propertyData.washroom = req.body.washroom
                }

                if(req.body.garage){
                    propertyData.garage = req.body.garage
                }
                if(req.body.advisorId){
                    propertyData.advisorId = req.body.advisorId
                }
                if(req.body.cityId){
                    propertyData.cityId = req.body.cityId
                }
                if(req.body.status){
                    propertyData.status = req.body.status
                }
                if(req.body.propertyType){
                    propertyData.propertyType = req.body.propertyType
                }
                if(req.body.dealerstatus){
                    propertyData.dealerstatus = req.body.dealerstatus
                }
                propertyData.save()
                .then((resSave)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Updated Successfully",
                        data:resSave
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal Server Error",
                        errors:err.message
                    })
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error",
                errors:err.message
            })
        })
    }
}
module.exports = {add,getall,getSingleData,deleteData,updateData}