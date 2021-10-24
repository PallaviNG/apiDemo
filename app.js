const express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const apiRoutes = require('./app/router/apiRouter');
app.use("/",apiRoutes);

app.listen(3500,function(){
    console.log("Server is running on port 3500");
});