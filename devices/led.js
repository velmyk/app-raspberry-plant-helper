'use strict';

const
    five = require('johnny-five');

class Led {
	constructor() {
		this.led = new five.Led('P1-13');
	}

	signal() {
		this.led.strobe(1000);
		setTimeout(() => {
			this.led.stop().off()
		}, 1500);
	}
};

module.exports = Led;
  
