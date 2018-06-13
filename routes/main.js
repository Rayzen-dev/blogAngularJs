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

app.get('/', (req, res) => {
    let headers = req.headers["accept-language"].split(',')[0];

    res.redirect(headers + '/blog');
});

app.use('/api');

app.use('/admin', require('./admin'));

app.use('/:lang/blog', require('./blog'));



module.exports = app;