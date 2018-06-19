const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    con = require('../../database');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/verification', (req, res) => {
    if (req.query.mail) {
        con.query('SELECT * FROM `users` WHERE `email`="'+req.query.mail+'"', (err, result) => {
            if (err) throw err;
            res.json({exist: Object.keys(result).length, field: 'mail'});
        });
    } else if (req.query.username) {
        con.query('SELECT * FROM `users` WHERE `username`="'+req.query.username+'"', (err, result) => {
            if (err) throw err;
            res.json({exist: Object.keys(result).length, field: 'username'});
        })
    }

});

router.get('/', (req,res) => {
    res.send('/api/users');
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.end();
});

module.exports = router;