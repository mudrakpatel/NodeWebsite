//Mudrak Patel; Github username: mudrakpatel
//imports
var express = require("express");
var path = require("path");
var app = express(); //express constructor function

app.set('view engine', 'ejs');
//set Templates directory as views folder for ejs view engine
app.set('views', path.join(__dirname, 'public/Templates'));
//Importing data from model.json file
var data = require("./public/model.json");

//Code to use static files and Routes folder contents
app.use(express.static("./public"));
app.use(require("./public/Routes/index"));
app.use(require("./public/Routes/characters"));
app.use(require("./public/Routes/character"));

//specify a port number to listen for server
app.listen(3000);
//log the server status to the console
console.log("Character World app server running on port 3000...");

//Export this file as a module
module.exports = app;