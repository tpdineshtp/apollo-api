'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    Required: 'Kindly enter the username'
  },
  password: {
    type: String,
    Required: 'Kindly enter the password'
  },
  email: {
    type: String,
    Required: 'Kindly enter the email'
  },
  full_name: {
    type: String,
    Required: 'Kindly enter the full name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
