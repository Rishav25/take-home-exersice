import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import dotenv from "dotenv";

import accountingSoftwareRoutes from "./routes/AccountingSoftwareRoutes.js";
import  decisonEngineRoutes from "./routes/DecisionEngineRoutes.js";

dotenv.config();

var app = express();
app.get("/", function(req,res){
    res.send("App is up and running");
})

app.use(bodyParser.json({limit : "30mb",extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb",extended : true}));
app.use(cors());
app.use("/accSoftware", accountingSoftwareRoutes);
app.use("/decisionEngine", decisonEngineRoutes);

var server = app.listen(process.env.PORT || 8080, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://", host, port);
})
