const category = require("./categoryModel")

add = (req,res)=>{
    let validationError = []
    if(!req.body.categoryName){
        validationError.push("categoryName is required")
    }
    if(!req.file){
        validationError.push("categoryImage is Required")
    }
    if(!req.body.description){
        validationError.push("Description is required")
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
        category.findOne({categoryName:req.body.categoryName})
        .then((categoryData)=>{
            if(!categoryData){
                let catObj = new category()
                catObj.categoryName = req.body.categoryName
                catObj.categoryImage = "Category/" + req.file.filename
                catObj.description = req.body.description
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
            }
            else{
                res.json({
                    status:500,
                    success:false,
                    message:"Data already exist",
                    data:categoryData
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

getall =async (req,res)=>{
    const totalCount = await category.countDocuments().exec()

    category.find()
    .then((categoryData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data Loaded Successfully",
            data:categoryData,
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
        category.findOne({_id:req.body._id})
        .then((categoryData)=>{
            if(!categoryData){
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
                    data:categoryData
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
        category.findOne({_id:req.body._id})
        .then((categoryData)=>{
            if(!categoryData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found",
                })
            }
            else{
                category.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted Successfully",
                        data:categoryData
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
        category.findOne({_id:req.body._id})
        .then((categoryData)=>{
            if(!categoryData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                if(req.body.categoryName){
                    categoryData.categoryName = req.body.categoryName
                }
                if(req.file){
                    categoryData.categoryImage = "Category/" + req.file.filename
                }
                if(req.body.description){
                    categoryData.description = req.body.description
                }
                categoryData.save()
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