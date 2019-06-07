var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
//Require Mongoose
var mongoose = require('mongoose');
//Require bot model
var Bot = require('../models/bot');
var router = express.Router();


/**@function GET Bot
 * @summary Define the get method for a bot
 * @returns JSON file of the bot
 */
router.get('/:id', function(req, res, next) {
    //TODO: MongoDB + look for bot in DB + send also brainName
    res.json({ botName : req.params.botName});
});

/**@function POST Bot
 * @summary Define the creation of a bot
 * @returns
 */
router.post('/:id-:botName-:brainName-:isOn-:interface', function(req, res, next) {
    // Create a bot object
    var bot = new Bot({
        id: req.params.id,
        botName: req.params.botName,
        brainName: req.params.brainName,
        isOn: req.params.isOn,
        interface: req.params.interface});
    // Save the bot in the database
    bot.save().then(() => {
        // Bot saved
        console.log("Bot saved !");
    })
        .catch((err) => {
            console.log("Database error, bot not saved")
        });
    //TODO: MongoDB + JSON
});

/**@function PUT Bot
 * @summary Define the modification of a bot
 * @returns
 */
router.put('/:id-:parameterName-:parameterValue', function(req, res, next) {
    //must modify a parameter (in the url) of the brain
    //TODO: JSON
});

/**@function DELETE Bot
 * @summary Define the deletion of a bot
 * @returns
 */
router.delete('/:botid', function(req, res, next) {
    //must delete the brain with this id
    //TODO: JSON
});

module.exports = router;