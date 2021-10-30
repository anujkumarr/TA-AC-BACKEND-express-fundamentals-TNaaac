var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();


// app.use(express.json());

// app.use(express.urlencoded({ extended: false }));

// app.use(express.static(__dirname + '/public'));

app.use(logger('dev'))
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});


// app.post('/json', (req, res) => {
//   console.log(req.body);
// });

app.post('/about', (req, res,next) => {
  res.cookie("username", "anuj");
  console.log(req.cookies,"cookies");
  next();
});

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.listen(4000, () => {
  console.log('server is listening on port 4k');
});
