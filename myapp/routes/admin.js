var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
//Require Mongoose
var mongoose = require('mongoose');
//Require bot model
var Bot = require('../models/bot');
var router = express.Router();


/* Requires body-parser to retrieve form data from http request*/
var bodyParser = require('body-parser');


/**@function GET admin
 * @summary Define the GET admin page
 * @returns Renders the admin.ejs view
 */
router.get('/', function(req, res, next) {
    res.render('admin', {page:'WELCOME', menuId:'ADMIN'});
});

/**@function GET admin/create
 * @summary Define the creation page of a bot
 * @returns Renders the botcreate.ejs view
 */
router.get('/create', function(req, res, next) {
    res.render('botcreate', {page:'WELCOME', menuId:'ADMIN'});
});

/**@function GET admin/:id
 * @summary Define the GET the administration page of an existing bot
 * @returns Renders the botmodif.ejs view of the target bot
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
            // Load an individual brain file
            res.render('botmodif', {page:'WELCOME', menuId:'ADMIN', id:bot.id, botName : bot.botName});
        }
    });
});



module.exports = router;