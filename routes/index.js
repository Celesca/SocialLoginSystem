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

module.exports = router;