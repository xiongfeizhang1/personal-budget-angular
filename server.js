const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});


var json = require('./db.json');

app.get('/budget', (req, res) => {
    res.json(json);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
