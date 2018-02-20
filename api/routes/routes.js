'use strict';

module.exports = function(app) {
	var user = require('../controllers/userController')


	app.route('/users/register')
		.post(user.register_user)
};
