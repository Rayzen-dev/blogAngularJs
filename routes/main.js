const express = require('express'),
    app = express.Router();

const i18n = require('i18n');

app.use('/:lang', (req, res, next) => {
    if (i18n.getLocales().indexOf(req.params.lang) >= 0 || req.params.lang === 'admin') {
        i18n.setLocale(req.params.lang);
        next();
    } else {
        let currentUrl = req.originalUrl;
        res.redirect(currentUrl.replace('/'+req.params.lang, '/en'));
    }
});

app.get('/:lang', (req, res) => {
    res.send(req.params.lang);
});

app.use('/:lang/blog', require('./blog'));



module.exports = app;