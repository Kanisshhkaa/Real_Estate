const express = require("express");
const app = express();
const port = 3021;
var cors = require("cors")
app.use(cors())

const config = require("./config/db");

const seeder = require("./config/seeder")
seeder.adminseeder()
app.use(express.static(__dirname+("/public/")))
app.use(express.urlencoded({extended:false}))
app.use(express.json({limit:"50mb"}))
const route = require("./routes/apiRoutes")
app.use("/api",route)
app.get("/dreamDwell",(req,res)=>{
    res.send("Its our Real estate project")
});

app.listen(port,()=>{
    console.log("Welcome to DreamDwell with port "+ port);
})