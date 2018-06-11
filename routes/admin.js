const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    console.log('admin')
});

module.exports = router;