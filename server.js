//Mudrak Patel; Github username: mudrakpatel
//imports
var express = require("express");
var path = require("path");
var app = express(); //express constructor function

//Importing data from model.json file
app.locals.characterData = require("./public/model.json");

app.set('view engine', 'ejs');
//set Templates directory as views folder for ejs view engine
app.set('views', path.join(__dirname, 'public/Templates'));
app.set("port", process.env.PORT || 3000);

//Code to use static files and Routes folder contents
app.use(express.static("./public"));
app.use(require("./public/Routes/index"));
app.use(require("./public/Routes/characters"));
app.use(require("./public/Routes/character"));

//specify a port number to listen for server
app.listen(app.get("port"));
//log the server status to the console
console.log("Character World app server running on port " + app.get("port") + "...");

//Export this file as a module
module.exports = app;