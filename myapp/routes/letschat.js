var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var RiveScript = require('rivescript');
//Require Mongoose
var mongoose = require('mongoose');
//Require bot model
var Bot = require('../models/bot');
var router = express.Router();


/**@function GET Bot
 * @summary Define the GET bot
 * @returns
 */
router.get('/:botid', function(req, res, next) {
    res.render('discuss',{page:'Welcome to our Chatbot service', menuId:'home', botid: JSON.stringify(req.params.botid)});
});

router.post('/:id/reply', function(req, res, next) {
    var bot = new RiveScript();

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
            var botstats = results[0];
            // Load an individual brain file
            bot.loadFile("brains/"+botstats.brainName+".rive").then(botready).catch(loaderror);
        }
    });

    function botready() {
        console.log("Bot loaded");
        bot.sortReplies();
        let username = "local-user";
        let message = req.body.message;
        bot.reply(username,message).then(reply).catch(replyerror);
    }

    function reply(messagereply){
        res.json(({ reply : messagereply }));
    }

    function loaderror(data){
        console.log("Error loading bot");
        console.log(data);
    }

    function replyerror(data){
        console.log("Error, the bot failed to reply");
        console.log(data);
    }
});

module.exports = router;
