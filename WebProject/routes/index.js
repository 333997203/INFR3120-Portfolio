
var express = require('express');
var router = express.Router();

/* Redirect main page to Home */
router.get('/', function(req, res) {
  res.redirect('/home');
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about us page. */
router.get('/aboutus', function(req, res, next) {
  res.render('index', { title: 'About us' });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact us' });
});

/* Also support /contactus */
router.get('/contactus', function(req, res, next) {
  res.render('index', { title: 'Contact us' });
});

module.exports = router;
