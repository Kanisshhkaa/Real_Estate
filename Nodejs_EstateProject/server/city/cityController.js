const city = require("./cityModel")

add = (req,res)=>{
    let validationError = []
    if(!req.body.cityName){
        validationError.push("CityName is required")
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
        city.findOne({cityName:req.body.cityName})
        .then((cityData)=>{
            if(!cityData){
                let catObj = new city()
                catObj.cityName = req.body.cityName
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
                    data:cityData
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
    const totalCount = await city.countDocuments().exec()

    city.find()
    .then((cityData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data Loaded Successfully",
            data:cityData,
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
        city.findOne({_id:req.body._id})
        .then((cityData)=>{
            if(!cityData){
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
                    data:cityData
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
        city.findOne({_id:req.body._id})
        .then((cityData)=>{
            if(!cityData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not found",
                })
            }
            else{
                city.deleteOne({_id:req.body._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Data Deleted Successfully",
                        data:cityData
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
        city.findOne({_id:req.body._id})
        .then((cityData)=>{
            if(!cityData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                if(req.body.cityName){
                    cityData.cityName = req.body.cityName
                }
                cityData.save()
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