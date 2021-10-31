var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookies-parser");

var app = express();

// middleware

app.use(express.json());



app.use('/admin', (req, res, next) => {
  next('Unauthorised request');
});

app.get('/', (req, res, next) => {
  res.send('Welcome');
  next();
});

app.get('/about', (req, res, next) => {
  res.send('Welcome to the about page');
  next();
});

app.use((req, res, next) => {
  res.send("This requested url is not found")
  next();
})

app.use((err, req, res, next) => {
  res.status(500).send(err);
})


// server

app.listen(3000, () => {
  console.log("Server is listening on port 3k");
})