var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var Rivescript = require('Rivescript');
var router = express.Router();


/**@function GET Bot
 * @summary Define the GET bot
 * @returns
 */
router.get('/', function(req, res, next) {
    var bot = new RiveScript();

    // Load an individual brain file
    bot.loadFile("brain/standard.rive").then(botready).catch(loaderror);

    function botready() {
        console.log("Bot loaded");
        bot.sortReplies();
        let username = "local-user";
        bot.reply(username, "Hello, bot!").then(reply).catch(replyerror);
    }

    function reply(){

    }

    function loaderror(){
        console.log("Error loading bot");
    }

    function replyerror(){
        console.log("Error reply bot");
    }

    res.render('index',{page:'Welcome to our Chatbot service', menuId:'home'});
});

module.exports = router;