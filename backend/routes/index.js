var express = require('express');
var db = require('../db');

var router = express.Router();

router.get('/', function(req, res, next) {
    if (!req.user) { 
        return res.json("Not logged in")
    }
    next();
}, function(req, res, next) {
    db.all('SELECT * FROM todos WHERE owner_id = ?', [ req.user.id ], function(err, rows) {
        if (err) { return next(err); }
        res.json(rows);
    });
});