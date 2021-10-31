var express = require('express');
var logger = require('morgan');
var cookieParser = require("cookie-parser");

var app = express();

// middleware

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use(logger('dev'));

app.use(cookieParser());

//url

app.use('/admin', (req, res, next) => {
  next('Unauthorised request');
});

app.get('/users/:username', (req, res) => {
  var username = req.params.username;
  res.send(`<p>${username}</p>`);
});

app.get('/', (req, res, next) => {
  res.send('<h2><center>Welcome to express</center></h2>');
  next();
});

app.get('/about', (req, res, next) => {
  res.send('<p><center>My name is qwerty</center></p>');
  next();
});

app.post("/json", (req, res, next) => {
  res.send(req.body);
  next();
})

app.use((req, res, next) => {
  res.status(404).send('This requested url is not found');
  next();
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});


// server

app.listen(3000, () => {
  console.log('Listening on port 3k');
});
