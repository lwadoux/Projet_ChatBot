var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var Rivescript = require('Rivescript');
var router = express.Router();

/**@function GET Brain
 * @summary Define the GET brain
 * @returns
 */
router.get('/', function(req, res, next) {
    //must render a JSON with the brain
    //TODO: url with brain name, JSON
});

module.exports = router;