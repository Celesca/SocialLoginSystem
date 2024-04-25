var express = require('express');
var db = require('../db');

var router = express.Router();

router.get('/', function(req, res, next) {
    if (!req.user) { 
        return res.json("Not logged in")
    }
    next();
}, function(req, res, next) {
    console.log(req.user);
    res.json("Logged in as " + req.user.name);
});

module.exports = router;