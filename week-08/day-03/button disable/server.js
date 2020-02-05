'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded());

app.get('/' ,(req, res) => {
    res.sendfile('./public/index.html');
  });
  
  app.post('/send', (req, res) => {
    console.log(req.body)
  });
  
  app.listen(PORT, () => {
    console.log(`Listening on port number ${PORT}`);
  });