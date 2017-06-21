var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/werrow', function(err, res){
  if (err) {
    console.log("Could not connect to the database");
  }
  else {
    console.log("Successfully connected to the database");
  }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cookie Parser
//app.use(cookieParser());
app.use(session({
  secret: "Your secret key",
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  resave: false,
  saveUninitialized: true,
}));

const api = require('./routes/api');
app.use('/api', api);
app.use('/', express.static(__dirname + '/../werrow-client/dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../werrow-client/dist', 'index.html'))
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(4200, function() {
  console.log('Example listening on port 4200!');
});

module.exports = app;
