var express = require("express");
var router = express.Router();
var characterData = require("../model.json");

//Unknown route handler
router.get("/character.ejs", function(request, response) {
    response.status(404);
    response.render("error404.ejs");
    response.end();
});

//specific character route handler
router.get("/character.ejs/:characterID", function(request, response) {
    var tempCharacter = {};
    //Loop through all characters in the array
    characterData.charactersArray.forEach(function(character) {
        if (character.characterID == request.params.characterID) {
            //If true, assign tempCharacter to parameter object
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