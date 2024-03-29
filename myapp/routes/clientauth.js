var express = require('express');
var router = express.Router();


/* Requires body-parser to retrieve form data from http request*/
var bodyParser = require('body-parser');


/**@function GET client
 * @summary Define the GET client page
 * @returns Renders the auth.ejs view, with no error message
 */
router.get('/', function(req, res, next) {
    res.render('auth', {page:'WELCOME', menuId:'CLIENT'});
});

module.exports = router;