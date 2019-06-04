var express = require('express');
var router = express.Router();


/* Requires body-parser to retrieve form data from http request*/
var bodyParser = require('body-parser');


/**@function GET client
 * @summary Define the GET client page
 * @returns Renders the client.ejs view, with no error message
 */
router.get('/', function(req, res, next) {
    res.render('client', {page:'CLIENT', menuId:'client', ErrorMessage:' '});
});

module.exports = router;