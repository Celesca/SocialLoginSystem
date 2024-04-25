var express = require('express');
var db = require('../db');

var router = express.Router();

router.get('/', function(req, res, next) {
    if (!req.user) { 
        res.render('index');
    }
    next();
}, function(req, res, next) {
    console.log(req.user);
    res.render('home');
});

module.exports = router;