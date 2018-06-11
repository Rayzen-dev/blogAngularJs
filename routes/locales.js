const express = require('express'),
    app = express.Router();


app.use('/blog', require('./main'));

/*
//This code is executed
router.get('/', (req, res) => {
    res.send('Hello world!');
});

//  This code isn't executed
router.get('/', (req, res) => {
    res.send('Hello world!2');
});
*/

//  Fallback route for error
/**
 * @Todo: Faire le fichier de routes pour les erreurs
 * @type {Router|router|*}
 */

module.exports = app;