var express = require('express');
var db = require('../db');

var router = express.Router();

router.get('/', function(req, res) {
    if (!req.user) { 
        res.render('index');
    }
    else {
        res.redirect('/home');
    }
})

router.get('/home', function(req, res, next) {
    res.render('home');
});

router.get('/signup', function(req, res) {
    res.render('signup');
});

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

module.exports = router;