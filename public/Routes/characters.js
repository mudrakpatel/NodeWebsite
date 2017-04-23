var express = require("express");
var router = express.Router();

router.get("/character.ejs", function(request, response) {
    response.render("character.ejs");
});

module.exports = router;