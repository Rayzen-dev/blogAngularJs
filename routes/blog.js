const express = require('express'),
    app = express.Router();

app.get('/', (req, res) => {
    res.send('Hello!');
});

module.exports = app;