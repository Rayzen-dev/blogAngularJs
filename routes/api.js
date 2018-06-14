const express = require('express'),
    router = express.Router();

router.use((req, res, next) => {
    if (req.xhr) {
        next();
    } else {
        res.status(403).send(req.headers);
    }
});

router.get('/', (req, res) => {
    res.send('lol');
});

router.get('/api', (req, res) => {
    res.send('lol');
});

module.exports = router;
