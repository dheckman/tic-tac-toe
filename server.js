/***** DO NOT EDIT *****/
const express = require('express');
const fs  = require('fs');
let app = express();

app.use('/', express.static(__dirname + '/app/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(3000, () => console.log('booting server...'));
