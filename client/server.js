'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();
// app.use('/', express.static(__dirname + '/dist'));


app.get('/dom', (req, res) =>{
  res.status(200).json("DOM")
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);