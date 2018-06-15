const express = require('express'),
    router = express.Router(),
    con = require('../../database');

router.get('/verification', (req, res) => {
    if (req.query.mail) {
        con.query('SELECT * FROM `users` WHERE `email`="'+req.query.mail+'"', (err, result) => {
            if (err) throw err;
            res.json({exist: Object.keys(result).length, field: 'mail'});
        });
    } else if (req.query.username) {
        con.query('SELECT * FROM `users` WHERE `username`="'+req.query.username+'"', (err, result) => {
            if (err) throw err;
            console.log(result);
            res.json({exist: Object.keys(result).length, field: 'username'});
        })
    }

});

router.get('/', (req,res) => {
    res.send('/api/users');
});

module.exports = router;