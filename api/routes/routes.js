'use strict';

module.exports = function(app) {
	var user = require('../controllers/userController')


	app.route('/users/register')
		.post(user.register_user)

	app.route('/users/auth')
	.post(user.authenticate_user);
};
