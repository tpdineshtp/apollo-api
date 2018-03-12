'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');
var nodemailer = require('nodemailer');

/*
download resume
*/
exports.send_mail = function(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tpdineshtp@gmail.com',
      pass: 'Dinesh&05'
    }
  });

  var text = "Name : "+req.body.name+", Email : "+req.body.email+", Number : "+req.body.number+", Message : "+req.body.message;

  var mailOptions = {
    from: 'tpdinesh@gmail.com',
    to: 'tpdineshtp@gmail.com',
    subject: 'Hire me request My Info!',
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.status(500).send();
    } else {
      res.status(200).send(info.response);
    }
  });
};
