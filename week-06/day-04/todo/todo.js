'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const todos = ['get up', 'survive', 'go back to bed', 'sleep all day' , 'drink a beer'];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {todos:todos});
});


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));