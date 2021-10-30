var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

// middleware

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use(logger('dev'));

app.use(cookieParser());

app.use('/about', (req, res, next) => {
  res.cookie('username', 'anuj');
  res.send('About Page');
  next();
});

app.use((req, res, next) => {
  console.log(req.cookies, 'cookies');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/new.html');
})

app.get('/users/:username', (req, res) => {
  var username = req.params.username;
  res.send(username)
})

app.post('/new',(req, res) => {
  console.log(req.body, "data ");
  res.json(req.body)
})

app.listen(4001, () => {
  console.log('server is listening on port 4k');
});
