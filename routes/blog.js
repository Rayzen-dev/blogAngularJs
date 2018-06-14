const express = require('express'),
    app = express.Router(),
    i18n = require('i18n');

app.get('/', (req, res) => {
    let greetings = {
        'index': i18n.__('index'),
        'title': i18n.__('title'),
        'about': i18n.__('about')
    };

    res.render('pages/index', { 'trad': greetings, 'getLocale': i18n.getLocale(), 'allLocales': i18n.getLocales() });
});

module.exports = app;