var express = require('express');
var router = express.Router();

/**@function GET Home Page
 * @summary Define the GET home page
 * @returns Renders the index.ejs view
 */
router.get('/', function(req, res, next) {
  res.render('index',{page:'Fun platform to play', menuId:'home'});
});

module.exports = router;
