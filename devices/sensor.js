'use strict';

const
    sensorLib = require('node-dht-sensor');

const
    MIN_HUMIDITY = 50;

class Sensor {
    constructor() {
        sensorLib.initialize(22, 4);
        this.humidity = null;
    }

    read() {
        this.humidity = sensorLib.read().humidity.toFixed(2);
        console.log(`Humidity: ${this.humidity}`);
    }

    isHumidityNormal() {
        this.read();
        return this.humidity > MIN_HUMIDITY;
    }
}

module.exports = Sensor;
