var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var Rivescript = require('Rivescript');
var router = express.Router();

/**@function GET Bot
 * @summary Define the get method for a bot
 * @returns JSON file of the bot
 */
router.get('/', function(req, res, next) {
    //must render a JSON with the bot
    //TODO: url with bot name, JSON
});

/**@function CREATE Bot
 * @summary Define the creation of a brain
 * @returns
 */
router.create('/', function(req, res, next) {
    //takes a JSON to create a bot ? or create a json from parameters in the url ?
    //TODO: url with brain characteristics, JSON
});

/**@function POST Bot
 * @summary Define the modification of a brain
 * @returns
 */
router.post('/', function(req, res, next) {
    //must modify a parameter (in the url) of the brain
    //TODO: url with brain name, JSON
});

module.exports = router;