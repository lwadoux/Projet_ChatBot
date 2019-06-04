var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var Rivescript = require('Rivescript');
var router = express.Router();

/**@function GET Bot
 * @summary Define the get method for a bot
 * @returns JSON file of the bot
 */
router.get('/:botName', function(req, res, next) {
    //must render a JSON with the bot
    //TODO: JSON
});

/**@function POST Bot
 * @summary Define the creation of a brain
 * @returns
 */
router.post('/:botName-:brainName', function(req, res, next) {
    //takes a JSON to create a bot ? or create a json from parameters in the url ?
    //TODO: url with bot characteristics, JSON
});

/**@function PUT Bot
 * @summary Define the modification of a brain
 * @returns
 */
router.put('/:botName-:brainName', function(req, res, next) {
    //must modify a parameter (in the url) of the brain
    //TODO: JSON
});

/**@function DELETE Bot
 * @summary Define the deletion of a brain
 * @returns
 */
router.delete('/:botName', function(req, res, next) {
    //must delete the brain with this name
    //TODO: JSON
});

module.exports = router;