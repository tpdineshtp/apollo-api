var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'),
  bodyParser = require('body-parser');

var cors = require('cors')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apollo-master');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('apollo API server started on: ' + port);
