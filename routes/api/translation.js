const express = require('express'),
    router = express.Router(),
    i18n = require('i18n');

router.get('/:lang/:code', (req, res) => {
    let lang = req.params.lang,
        code = req.params.code;

    res.json(i18n.getCatalog(lang)[code]);
});

module.exports = router;