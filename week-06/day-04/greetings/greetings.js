'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log(req.query)
    let name = req.query.name;
    if (!name) {
        name = 'Guest';
    }
    res.render('home', { title: `Welcome back, ${name}` });
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));