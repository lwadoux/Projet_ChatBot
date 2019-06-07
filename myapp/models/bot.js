//Require Mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/** @name BotSchema
 * @summary Define Bot Schema as a mongoose schema
 * @property id - int - Id of the bot
 * @property botName - String - Name of the bot
 * @property brainName - String - Name of the brain
 * @property isOn - boolean - True if the bot is on, false otherwise
 */
var BotSchema = new Schema(
    {
        id: {type: int, required: true, max: 100},
        botName: {type: String, required: true, max: 100},
        brainName: {type: String, required: true, max: 100},
        isOn: {type: boolean, required: true, default:true},
    }
);

//Export model to MongoDB
module.exports = mongoose.model('Player', PlayerSchema);