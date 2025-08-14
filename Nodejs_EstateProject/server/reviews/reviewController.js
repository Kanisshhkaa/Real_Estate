const review = require("./reviewModel")

add=(req,res)=>{
    validationError=[]
    
    if(!req.body.customerId){
        validationError.push("customerId is required")
    }
    
    if(!req.body.advisorId){
        validationError.push("advisorId is required")
    }
    if(!req.body.propertyId){
        validationError.push("propertyId is required")
    }
    if(!req.body.rating){
        validationError.push("Rating is required")
    }
    if(!req.body.reviewMessage){
        validationError.push("reviewMessage is required")
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
                let reviewObj = new review()
                reviewObj.customerId=req.body.customerId
                reviewObj.propertyId=req.body.propertyId
                reviewObj.rating=req.body.rating
                reviewObj.reviewMessage=req.body.reviewMessage
                reviewObj.save()

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
}

getall =  async(req,res)=>{
    const totalCount = await review.countDocuments(req.body).exec()
    review.find(req.body).populate("advisorId").populate("customerId").populate("propertyId")
    .then((reviewData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully",
            data:reviewData,
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
        review.findOne({_id:req.body._id})
        .then((reviewData)=>{
            if(!reviewData){
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
                    data:reviewData
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
        review.findOne({_id:req.body._id})
        .then((reviewData)=>{
            if(!reviewData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found",
                })
            }
            else{
                review.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted Successfully",
                        data:reviewData
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
        review.findOne({_id:req.body._id})
        .then((reviewData)=>{
            if(!reviewData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                if(req.body.reviewMessage){
                    reviewData.reviewMessage = req.body.reviewMessage
                }
                
                if(req.body.customerId){
                    reviewData.customerId = req.body.customerId
                }

                if(req.body.advisorId){
                    reviewData.advisorId = req.body.advisorId
                }

                if(req.body.propertyId){
                    reviewData.propertyId = req.body.propertyId
                }
                
                if(req.body.rating){
                    reviewData.rating = req.body.rating
                }
                
                reviewData.save()
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