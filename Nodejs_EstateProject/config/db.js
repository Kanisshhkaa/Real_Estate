const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/dreamDwell")

.then(()=>{
    console.log("DATABASE CONNECTED SUCCESSFULLY")
})
.catch((err)=>{
    console.log("DATABASE CONNECTION FAILED");
    console.log(err);
})