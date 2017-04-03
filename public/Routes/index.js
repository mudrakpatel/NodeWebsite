var express = require("express");
var router = express.Router();

router.all("/", function(request, response) {
    response.render("index.ejs");
});

module.exports = router;