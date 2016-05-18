'use strict';

const
    five = require('johnny-five');

class Servo {
	constructor() {
		this.servo = new five.Servo('P1-12');
		this.servo.to(10);
	}

	push() {
		this.servo.to(110);
	}

	release() {
		this.servo.to(10);
	}
};

module.exports = Servo;
  
