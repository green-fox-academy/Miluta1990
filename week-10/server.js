'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
require('dotenv').config();
const fs = require('fs');
app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.json());

let cors = require('cors');


// DB connection

const connection =  mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: 'music',
});

const songsTable = 'songs';
const playlistsTable = 'playlists'

connection.connect((err) => {
    err ? console.error(new Error(err)) : console.log(`Database *music* connected!`);
  });

  // *** START OF ENDPOINTS ***

// serving main page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

// data getting endpoints
//get playlist
app.get('/playlists', function(req, res) {
  let sql = "SELECT * FROM playlists";
  connection.query(sql, function(err, result) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' });
    } else {
      res.json(result);
    }
  })
});

app.get('/tracks', function(req, res) {
  let sql = "select path from tracks inner join playlists on tracks.playlist_id = playlists.id where playlist_id = 1;";
  connection.query(sql, function(err, result) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' });
    } else {
      res.json(result);
    }
  })
});


app.listen(PORT, () => {
    console.log(`Application is listening on port# ${PORT}`);
});