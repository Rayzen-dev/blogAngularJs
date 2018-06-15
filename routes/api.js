const express = require('express'),
    router = express.Router();

router.use((req, res, next) => {
    if (req.xhr) {
        next();
    } else {
        res.status(403).send(req.headers);
    }
});

router.use('/users', require('./api/user'));

module.exports = router;
