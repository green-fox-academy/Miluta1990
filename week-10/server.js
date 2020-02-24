'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;
require('dotenv').config();
app.use(express.static('public'));
app.use(express.json());


// DB connection

const connection =  mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: 'songs',
});

const songsTable = 'songs';


connection.connect((err) => {
    err ? console.error(new Error(err)) : console.log(`Database *${songsTable}* connected!`);
  });


app.listen(PORT, () => {
    console.log(`Application is listening on port# ${PORT}`);
});