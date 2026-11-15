
var express = require('express');
var router = express.Router();

/* Redirect to Home */
router.get('/', function(req, res) {
  res.redirect('/home');
});

/* GET home page */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET about us page */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About me' });
});

/* GET products page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET services page */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact us page */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact me' });
});

module.exports = router;
