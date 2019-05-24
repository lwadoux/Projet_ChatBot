var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var router = express.Router();

/*var corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
*/

/**@function GET Home Page
 * @summary Define the GET home page
 * @returns Renders the index.ejs view
 */
router.get('/', function(req, res, next) {
  res.render('index',{page:'Welcome to our Chatbot service', menuId:'home'});
});

module.exports = router;
