const express = require('express'),
    app = express.Router();

const i18n = require('i18n');

app.use('/:lang', (req, res, next) => {
    if (i18n.getLocales().indexOf(req.params.lang) >= 0 || req.params.lang === 'admin' || req.params.lang === 'api') {
        i18n.setLocale(req.params.lang);
        res.locals.setLocale(req.params.lang);
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

app.use('/api', require('./api'));

app.use('/admin', require('./admin'));

app.use('/:lang/blog', require('./blog'));

//  ------------------------------
//  Auth routes
app.get('/:lang/register', (req, res) => {
    let greetings = {
        register: i18n.__('register.title')
    };
    res.render('auth/register', { 'trad': greetings, 'getLocale': i18n.getLocale(), 'allLocales': i18n.getLocales() });
});


module.exports = app;