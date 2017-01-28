var express = require('express');
var app = express();

// .get() used to define routes for assets
app.get('/', function (req, response) {
  response.send('Hello World')
});

app.listen(3000);
