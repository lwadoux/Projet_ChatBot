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
    query = Bot.find({ id:req.params.id },function (err, results) {
        if (err) {
            console.log('Query error (bot id)');
            res.json({status : "Query error (bot id)"});
        }
        else if (!results.length) {
            console.log('Incorrect bot id');
            res.json({status : "Incorrect bot id"});
        }
        else{
            var bot = results[0];
            res.json({ id: req.params.id, botName: bot.botName, brainName: bot.brainName, isOn: bot.isOn, interface: bot.interface});
        }
    });
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
        res.json({ status: "ok"});
    })
        .catch((err) => {
            console.log("Database error, bot not saved");
            res.json({status : "Database error, bot not saved"});
        });
});

/**@function PUT Bot
 * @summary Define the modification of a bot
 * @returns
 */
router.put('/:id', function(req, res, next) {
    query = Bot.find({ id:req.params.id },function (err, results) {
        if (err) {
            console.log('Query error (bot id)');
            res.json({status : "Query error (bot id)"});
        }
        else if (!results.length) {
            console.log('Incorrect bot id');
            res.json({status : "Incorrect bot id"});
        }
        else{
            var bot = results[0];
            if(req.body.botName!==undefined){
                bot.botName = req.body.botName;
            }
            if(req.body.brainName!==undefined){
                bot.brainName = req.body.brainName;
            }
            if(req.body.isOn!==undefined){
                bot.isOn = req.body.isOn;
            }
            if(req.body.interface!==undefined){
                bot.interface = req.body.interface;
            }
            bot.save().then(() => {
                // Bot saved
                console.log("Bot saved !");
                res.json({ id: req.params.id, botName: bot.botName, brainName: bot.brainName, isOn: bot.isOn, interface: bot.interface});
            })
                .catch((err) => {
                    console.log("Database error, bot not saved"+err);
                    res.json({status : "Database error, bot not saved"});
                });
        }
    });
});

/**@function DELETE Bot
 * @summary Define the deletion of a bot
 * @returns
 */
router.delete('/:id', function(req, res, next) {
    //must delete the brain with this id
    query = Bot.find({ id:req.params.id },function (err, results) {
        if (err) {
            console.log('Query error (bot id)');
            res.json({status: "Query error (bot id)"});
        } else if (!results.length) {
            console.log('Incorrect bot id');
            res.json({status: "Incorrect bot id"});
        } else {
            var bot = results[0];
            bot.remove().then(() => {
                // Bot removed
                console.log("Bot removed !");
                res.json({status: "ok"});
            })
                .catch((err) => {
                    console.log("Database error, bot not removed" + err);
                    res.json({status: "Database error, bot not removed"});
                });
        }
    });
});

module.exports = router;