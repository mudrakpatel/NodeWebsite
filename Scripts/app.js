//Mudrak Patel; Github username: mudrakpatel
//imports
var express = require("express");
var app = express(); //express constructor function

//server code
app.get("/", function(request, response) {
    response.sendFile("index.html");
});