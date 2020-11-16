var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/


// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});





router.get('/users/cool', function(req, res, next) {
  res.render('cool', { title: 'You\'re so Cool!' });
});

module.exports = router;
