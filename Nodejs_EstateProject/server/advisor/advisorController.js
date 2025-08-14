const user = require("../user/userModel");
const advisor = require("./advisorModel");
const bcrypt = require("bcrypt");
const roundValue = 10;

register = (req,res)=>{
    let validationErrors =[];

    if(!req.body.name){
        validationErrors.push("name is required")
    }
    if(!req.body.email){
        validationErrors.push("email is required")
    }
    if(!req.body.password){
        validationErrors.push("password is required")
    }
    if(!req.body.contact){
        validationErrors.push("contact is required")
    }
    if(!req.body.gender){
        validationErrors.push("gender is required")
    }
    if(!req.file){
        validationErrors.push("Advisor Image is required")
    }



    if(validationErrors.length>0){
        res.json({
            status:422,
            success:false,
            message:"Validation error occurs",
            errors:validationErrors
        })
    }
    else{
        user.findOne({email:req.body.email})
        .then((userData)=>{
            if(!userData){
                let userObj = new user()
                userObj.name = req.body.name
                userObj.email = req.body.email
                userObj.userType = 2
                userObj.password = bcrypt.hashSync(req.body.password,roundValue)
                userObj.save()
                .then((userRes)=>{
                    let advisorObj = new advisor()
                    advisorObj.name = req.body.name
                    advisorObj.email = req.body.email
                    advisorObj.password = req.body.password
                    advisorObj.contact = req.body.contact
                    advisorObj.gender = req.body.gender
                    advisorObj.advisorImage = "Advisor/" + req.file.filename
                    advisorObj.userId = userRes._id
                    advisorObj.save()
                    .then((advisorRes)=>{
                        userObj.advisorId=advisorRes._id
                        userObj.save()
                        .then(()=>{
                            res.json({
                                status:200,
                                success:true,
                                message:"User registered successfully",
                                data:advisorRes
                            })
                        })
                        .catch((err)=>{
                            res.json({
                                status:500,
                                success:false,
                                message:"Internal server error",
                                errors:err.message
                            })
                        })
                    })
                }).catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal server error",
                        errors:err.message
                    })
                })
            }
            else{
                res.json({
                    status:422,
                    success:false,
                    message:"User already exists",
                    data:userData
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal server error",
                errors:err.message
            })
        })
    }

}
getallAdvisor = async(req,res)=>{
    const totalCount = await advisor.countDocuments().exec()
    advisor.find()
    .then((advisorData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data loaded successfully",
            data:advisorData,
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
    let  validationError = []
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
        advisor.findOne({_id:req.body._id})
        .then((advisorData)=>{
            if(!advisorData){
            res.json({
                status:404,
                success:false,
                message:"Data Not Found"
            })
        }
        else{
            res.json({
                status:200,
                success:true,
                message:"Data Loaded Successfully",
                data:advisorData
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
        advisor.findOne({_id:req.body._id})
        .then((advisorData)=>{
            if(!advisorData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                if(req.body.name){
                    advisorData.name = req.body.name
                }
                if(req.body.email){
                    advisorData.email = req.body.email
                }
                if(req.body.password){
                    advisorData.password = req.body.password
                }
                if(req.body.contact){
                    advisorData.contact = req.body.contact
                }
                if(req.body.gender){
                    advisorData.gender = req.body.gender
                }
                if(req.body.status){
                    advisorData.status = req.body.status
                }
                if(req.file){
                    advisorData.advisorImage = "Advisor/" + req.file.filename
                }
                
                advisorData.save()
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

module.exports={
    register,getSingleData,getallAdvisor,updateData
}