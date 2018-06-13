const express = require('express'),
    router = express.Router();

//  Middleware for deny acces to regular member or guest

router.get('/', (req, res) => {
    console.log('admin');
    res.end();
});

module.exports = router;