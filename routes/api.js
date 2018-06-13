const express = require('express'),
    router = express.Router();

router.use('/', (req, res, next) => {
    if (req.xhr || req.headers.accept.indexOf('json')) {
        next();
    } else {
        res.status(403);
    }
});