'use strict';

const
    raspi = require('raspi-io'),
    five = require('johnny-five');

const
    Servo = require('./servo'),
    Sensor = require('./sensor'),
    PERIOD = 1000 * 5;

// let
//     servo,
//     sensor;

// board.on('ready', () => {
//     servo = new Servo();
//     sensor.initialize() ? runWaterMachine() : console.warn('Failed to initialize sensor');
// });

class WaterMachine {
    constructor() {
        this.board = new five.Board({
            io: new raspi()
        });
        this.board.on('ready', () => {
            this.sensor = new Sensor();
            this.servo = new Servo();
		console.log('board ready');
this.run();
        });
    }

    run() {  
//        let
//            humidity = this.sensor.read();

        if(!this.sensor.isHumidityNormal()) {
            this.servo.push();
            setTimeout(() => {
                this.servo.release();
            }, 1000);
        }

        setTimeout(() => {
            this.run();
        }, PERIOD);
    }
}

module.exports = WaterMachine;
