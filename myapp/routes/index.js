var express = require('express');
var router = express.Router();

/**@function GET Home Page
 * @summary Define the GET home page
 * @returns Renders the index.ejs view
 */
router.get('/', function(req, res, next) {
  res.render('index',{page:'Welcome to our Chatbot service', menuId:'home'});
});

module.exports = router;
