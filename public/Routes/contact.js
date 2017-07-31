var express = require("express");
var router = express.Router();

router.get("/contact.ejs", function(request, response){
    response.render("contact.ejs");
});

module.exports = router;