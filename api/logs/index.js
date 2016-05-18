const
	express = require('express');

const
	controller = require('./logs.controller'),
	router = express.Router();

router.route('')
    .get(controller.getAll);

module.exports = router;
