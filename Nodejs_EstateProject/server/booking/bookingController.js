const booking = require("./bookingModel")

add = (req,res)=>{
    let validationError = []
    if(!req.body.propertyId){
        validationError.push("propertyId is required")
    }
    if(!req.body.customerId){
        validationError.push("customerId is required")
    }
    if(!req.body.advisorId){
        validationError.push("advisorId is required")
    }
    
    if(validationError.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation Error",
            errors: validationError
        })
    }
    else{
                let catObj = new booking()
                catObj.customerId = req.body.customerId
                catObj.propertyId = req.body.propertyId
                catObj.advisorId = req.body.advisorId
                catObj.save()

                .then((resSave)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data added Successfully",
                        data: resSave
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal Server error",
                        errors:err.message
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
}

getall =async (req,res)=>{
    const totalCount = await booking.countDocuments(req.body).exec()

    booking.find(req.body).populate("customerId").populate("propertyId").populate("advisorId")
    .then((bookingData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data Loaded Successfully",
            data:bookingData,
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
    let validationError = []
    if(!req.body._id){
        validationError.push("ID is required")
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
        booking.findOne({_id:req.body._id})
        .then((bookingData)=>{
            if(!bookingData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found"
                })
            }
            else{
                res.json({
                    status:200,
                    success:true,
                    message:"Data loaded Sucessfully",
                    data:bookingData
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
        booking.findOne({_id:req.body._id})
        .then((bookingData)=>{
            if(!bookingData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found",
                })
            }
            else{
                booking.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted Successfully",
                        data:bookingData
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
        booking.findOne({_id:req.body._id})
        .then((bookingData)=>{
            if(!bookingData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                if(req.body.customerId){
                    bookingData.customerId = req.body.customerId
                }
                if(req.body.propertyId){
                    bookingData.propertyId = req.body.propertyId
                }
                if(req.body.advisorId){
                    bookingData.advisorId = req.body.advisorId
                }
                if(req.body.status){
                    bookingData.status = req.body.status
                }
                bookingData.save()
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