//Require Mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/** @name BotSchema
 * @summary Define Bot Schema as a mongoose schema
 * @property id - int - Id of the bot
 * @property botName - String - Name of the bot
 * @property brainName - String - Name of the brain
 * @property isOn - boolean - True if the bot is on, false otherwise (true by default)
 * @property interface - String - Internal, discord, etc. - internal by default
 */
var BotSchema = new Schema(
    {
        id: {type: Number, required: true, max: 100},
        botName: {type: String, required: true, max: 100},
        brainName: {type: String, required: true, max: 100},
        isOn: {type: Boolean, required: true, default:true},
        interface: {type: String, required: true, default:'internal'},
    }
);

//Export model to MongoDB
module.exports = mongoose.model('Bot', BotSchema);