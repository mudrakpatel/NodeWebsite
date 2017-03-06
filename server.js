//Mudrak Patel; Github username: mudrakpatel
//imports
var express = require("express");
var app = express(); //express constructor function

//Code to use static files
app.use(express.static("public"));
app.use(express.static("public/Templates"));
app.use(express.static("public/Content"));

//server code
app.get("/", function(request, response) {
    response.render("index.html");
});

//specify a port number to listen for server
app.listen(3000);
//log the server status to the console
console.log("Character World app server running on port 3000...");

//Export this file as a module
module.exports = app;