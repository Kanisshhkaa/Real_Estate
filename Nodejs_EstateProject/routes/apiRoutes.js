const Router = require("express").Router();
const categoryController = require("../server/category/categoryController")
const cityController = require("../server/city/cityController")
const propertyController = require("../server/properties/propertyController")
const queryController = require("../server/query/queryController")
const reviewController = require("../server/reviews/reviewController")
const customerController = require("../server/customer/customerController")
const bookingController = require("../server/booking/bookingController")
const advisorController = require("../server/advisor/advisorController")
const userController = require("../server/user/userController")

const multer = require("multer")

const categorystorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Public/Category')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const categoryupload = multer({ storage: categorystorage })


  const propertiesstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Public/Properties')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const propertiesupload = multer({ storage: propertiesstorage })


  
const advisorstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Public/Advisor')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const advisorupload = multer({ storage: advisorstorage })




Router.post("/category/getall",categoryController.getall);
Router.post("/category/getSingleData",categoryController.getSingleData);
Router.post("/category/deleteData",categoryController.deleteData);
Router.post("/category/updateData",categoryupload.single('categoryImage'),categoryController.updateData);

Router.post("/booking/add",bookingController.add)
Router.post("/booking/getall",bookingController.getall)
Router.post("/booking/getSingleData",bookingController.getSingleData)
Router.post("/booking/deleteData",bookingController.deleteData)
Router.post("/booking/updateData",bookingController.updateData)


Router.post("/city/add",cityController.add)
Router.post("/city/getall",cityController.getall)
Router.post("/city/getSingleData",cityController.getSingleData)
Router.post("/city/deleteData",cityController.deleteData)
Router.post("/city/updateData",cityController.updateData)


Router.post("/review/add",reviewController.add)
Router.post("/review/getall",reviewController.getall)
Router.post("/review/getSingleData",reviewController.getSingleData)
Router.post("/review/deleteData",reviewController.deleteData)
Router.post("/review/updateData",reviewController.updateData)

Router.post("/property/add",propertiesupload.single('propertyImage'),propertyController.add);
Router.post("/property/getall",propertyController.getall);
Router.post("/property/getSingleData",propertyController.getSingleData);
Router.post("/property/deleteData",propertyController.deleteData);
Router.post("/property/updateData",propertiesupload.single('propertyImage'),propertyController.updateData)


Router.post("/query/add",queryController.add);
Router.post("/query/getall",queryController.getall);
Router.post("/query/getSingleData",queryController.getSingleData);
Router.post("/query/deleteData",queryController.deleteData);

Router.post("/customer/register",customerController.register);
Router.post("/customer/getall",customerController.getall);
Router.post("/user/update",userController.updateData);
Router.post("/customer/getSingleData",customerController.getSingleData);
Router.post("/customer/updateData",customerController.updateData);
Router.post("/advisor/register",advisorupload.single('advisorImage'),advisorController.register);
Router.post("/advisor/getallAdvisor",advisorController.getallAdvisor);
Router.post("/advisor/getSingleData",advisorController.getSingleData);
Router.post("/advisor/updateData",advisorupload.single('advisorImage'),advisorController.updateData);
Router.post("/customer/login",userController.login);
Router.post("/advisor/login",userController.login);

Router.use(require('../config/middleware'))
Router.post("/category/add",categoryupload.single('categoryImage') ,categoryController.add);
module.exports = Router;