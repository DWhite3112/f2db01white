var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kings', { title: 'Search Results Kings' });
});

module.exports = router;
