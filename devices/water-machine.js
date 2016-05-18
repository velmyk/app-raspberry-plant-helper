'use strict';

const
    raspi = require('raspi-io'),
    five = require('johnny-five');

const
    Servo = require('./servo'),
    Sensor = require('./sensor'),
    Led = require('./led'),
    humidityLogs = require('../api/logs/logs.controller');
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
                if (!this.sensor.isHumidityNormal(humidity)) {
                    this.servo.push();
                    setTimeout(() => {
                        this.servo.release();
                    }, 1000);
                }
                let log = {
                    humidity: humidity,
                    time: new Date()
                };
                humidityLogs.add(log)
                    .then(() => this.led.signal());
                    
                setTimeout(() => {
                    this.run();
                }, PERIOD);
            })
        	.catch(error => {
        		console.error(`Sensor error: ${error}`);
        		process.exit(-1);
            });
    }
}

module.exports = WaterMachine;
