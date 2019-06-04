var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var Rivescript = require('Rivescript');
var router = express.Router();


/**@function GET Bot
 * @summary Define the GET bot
 * @returns
 */
outer.get('/', function(req, res, next) {
    var bot = new RiveScript();

    // Load an individual brain file
    bot.loadFile("brain/standard.rive").then(botready).catch(loading_error);

    function botready() {
        console.log("Bot loaded");
        bot.sortReplies();
        let username = "local-user";
        bot.reply(username, "Hello, bot!").then(reply);
    }


    res.render('index',{page:'Welcome to our Chatbot service', menuId:'home'});
});

module.exports = router;