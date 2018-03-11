'use strict';

module.exports = function(app) {
	var user = require('../controllers/userController');
	var fileHandler = require('../controllers/fileHandler');


	app.route('/users/register')
		.post(user.register_user)

	app.route('/users/auth')
	.post(user.authenticate_user);

	app.route('/download/resume')
	.get(fileHandler.download_resume);
};
