const user = require("../user/userModel");
const customer = require("./customerModel");
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
                userObj.password = bcrypt.hashSync(req.body.password,roundValue)
                userObj.save()
                .then((userRes)=>{
                    let cusObj = new customer()
                    cusObj.name = req.body.name
                    cusObj.email = req.body.email
                    cusObj.password = req.body.password
                    cusObj.contact = req.body.contact
                    cusObj.userId = userRes._id
                    cusObj.save()
                    .then((cusRes)=>{
                        userObj.customerId=cusRes._id
                        userObj.save()
                        .then(()=>{
                            res.json({
                                status:200,
                                success:true,
                                message:"User registered successfully",
                                data:cusRes
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


getall =async (req,res)=>{
    const totalCount = await customer.countDocuments().exec

    customer.find()
    .then((customerData)=>{
        res.json({
            status:200,
            success:true,
            message:"Data Loaded Successfully",
            data:customerData,
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
        customer.findOne({_id:req.body._id})
        .then((customerData)=>{
            if(!customerData){
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
                    data:customerData
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
        customer.findOne({_id:req.body._id})
        .then((customerData)=>{
            if(!customerData){
                res.json({
                    status:404,
                    success:false,
                    message:"Data not Found"
                })
            }
            else{
                if(req.body.name){
                    customerData.name = req.body.name
                }
                if(req.body.email){
                    customerData.email = req.body.email
                }
                if(req.body.password){
                    customerData.password = req.body.password
                }
                if(req.body.contact){
                    customerData.contact = req.body.contact
                }
                if(req.body.status){
                    customerData.status = req.body.status
                }
                
                customerData.save()
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
    register,getall,getSingleData,updateData
}