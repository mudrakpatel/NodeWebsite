var express = require("express");
var router = express.Router();

router.get("/characters.ejs", function(request, response) {
    response.render("characters.ejs");
});

module.exports = router;