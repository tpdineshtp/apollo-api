'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

/*
Registers a new user
*/
exports.register_user = function(req, res) {
  User.find({ username : req.body.username } , function(err, user) {
    if (err)
      res.send(err);
    // validates if username already exists
    if (user.length!=0) {
      res.status(401).send();
    }
    else{
      var new_user = new User(req.body);
      new_user.save(function(err, user) {
        if (err)
          res.send(err);
        res.status(200).send(user);
      });
    }
  });
};
