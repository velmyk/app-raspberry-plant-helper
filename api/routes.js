const
	express = require('express');

const
	router = express.Router();

module.exports = (app) => {

	router
		.use('/logs', require('./logs'));

    app
    	.use('/api', router)

};