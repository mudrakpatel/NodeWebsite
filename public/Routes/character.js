var express = require("express");
var router = express.Router();
var characterData = require("../model.json");

router.get("/character.ejs/:characterID", function(request, response) {
    var tempCharacter = {};
    //Loop through all characters in the array
    characterData.charactersArray.forEach(function(character) {
        if (character.characterID == request.params.characterID) {
            //If condition is true,
            //then store the parameter object
            //in the tempCharacter variable object
            tempCharacter = character;
        }
    });
    //Render the character.ejs template with the requested
    //character information passed to character.ejs template
    response.render("character.ejs", {
        tempCharacter: tempCharacter
    });
});

module.exports = router;