const query = require("./queryModel")

add=(req,res)=>{
    validationError=[]
    if(!req.body.name){
        validationError.push("Name is required")
    }
    if(!req.body.email){
        validationError.push("E-Mail is required")
    }
    if(!req.body.subject){
        validationError.push("Subject is required")
    }
    if(!req.body.message){
        validationError.push("Message is required")
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
      
                let queryObj = new query()
                queryObj.name=req.body.name
                queryObj.email=req.body.email
                queryObj.subject=req.body.subject
                queryObj.message=req.body.message
                queryObj.save()

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
    const totalCount = await query.countDocuments().exec
    query.find()
    .then((queryData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully",
            data:queryData,
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
        query.findOne({_id:req.body._id})
        .then((queryData)=>{
            if(!queryData){
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
                    data:queryData
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
        query.findOne({_id:req.body._id})
        .then((queryData)=>{
            if(!queryData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found",
                })
            }
            else{
                query.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted Successfully",
                        data:queryData
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
module.exports = {add,getall,getSingleData,deleteData}