var express = require("express");

var app = express();

// Custom middlewares

// 1. morgan

app.use((req, res, next) => {
  let now = new Date();
  console.log(req.method, req.path, now);
  next();
});

// 2. express.json

app.post('/', (req, res) => {
  let data = req.body;
  console.log(req.body);
  res.send(JSON.parse(data));
});

app.listen(4000, 'localhost', () => {
  console.log('Server listning to port 4000!');
});