'use strict';

module.exports = function(app) {
	var user = require('../controllers/userController');
	var fileHandler = require('../controllers/fileHandler');
	var mailer = require('../controllers/mailer');


	app.route('/users/register')
		.post(user.register_user)

	app.route('/users/auth')
	.post(user.authenticate_user);

	app.route('/download/resume')
	.get(fileHandler.download_resume);

	app.route('/contact_me')
	.post(mailer.send_mail);

	app.route('/')
	.get(user.test_url)
};
