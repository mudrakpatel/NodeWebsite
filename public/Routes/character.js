var express = require("express");
var router = express.Router();
var characterData = require("../model.json");

router.get("/character.ejs/:characterID", function(request, response) {
    var tempCharacter = {};
    characterData.charactersArray.forEach(function(character) {
        if (character.characterID == request.params.characterID) {
            tempCharacter = character;
        }
    });
    response.render("character.ejs", {
        tempCharacter: tempCharacter
    });
});

module.exports = router;