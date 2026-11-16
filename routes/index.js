
var express = require('express');
var router = express.Router();

/* Redirect to Home */
router.get('/', function(req, res) {
  res.redirect('/home');
});

/* Displays Home page using home EJS template */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* Displays About me page using aboutme EJS template */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

/* Displays Projects page using projects EJS template */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* Displays Contact Me page using the contactme EJS template */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});

module.exports = router;
