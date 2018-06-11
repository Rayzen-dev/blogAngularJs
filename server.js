const express = require('express'),
    bodyParser = require('body-parser'),
    i18n = require('i18n');

//  Translate module
i18n.configure({
    locales: ['en', 'fr'],
    directory: __dirname + '/locales',
    defaultLocale: 'en'
});

const app = express();
app.use(i18n.init);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());


app.use(i18n.init);

//  Database connection
require('./database');

app.use('/', require('./routes/locales'));

app.listen(3000, () => {
    console.log('Server run on port 3000')
});