'use strict';

const
    raspi = require('raspi-io'),
    five = require('johnny-five');

const
    Servo = require('./servo'),
    Sensor = require('./sensor'),
    Led = require('./led'),
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
        this.led = new Led();
    }

    run() {
        this.sensor.read()
            .then(humidity => {
                if(!this.sensor.isHumidityNormal()) {
                    this.servo.push();
                    setTimeout(() => {
                        this.servo.release();
                    }, 1000);
                }
            })
            .finaly(() => {
                this.led.signal();
                setTimeout(() => {
                    this.run();
                }, PERIOD);
            });
    }
}

module.exports = WaterMachine;
