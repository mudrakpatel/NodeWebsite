var express = require("express");
var router = express.Router();
var characterData = require("../model.json");

router.get("/character.ejs/:characterID", function(request, response) {
    var tempCharacter = {};
    characterData.charactersArray.forEach(function(character) {
        if (request.params.characterID === character.characterID) {
            tempCharacter = character;
        }
    });
    response.render("character.ejs", { routeCharacter: tempCharacter });
});

module.exports = router;