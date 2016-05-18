'use strict';

const
    raspi = require('raspi-io'),
    five = require('johnny-five');

const
    Servo = require('./servo'),
    Sensor = require('./sensor'),
    PERIOD = 1000 * 5;

class WaterMachine {
    constructor() {
        this.board = new five.Board({
            io: new raspi()
        });
        this.board.on('ready', () => {
            this.initializeDevices();
            this.run();
        });
    }

    initializeDevices() {
        this.sensor = new Sensor();
        this.servo = new Servo();
    }

    run() {
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
