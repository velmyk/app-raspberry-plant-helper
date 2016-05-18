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
        return new Promise((resolve, reject) => {
            try {
                this.lastHumidityValue = sensorLib.read().humidity.toFixed(2);
                console.log(`Humidity: ${this.lastHumidityValue}`);
                resolve(this.lastHumidityValue);
            } catch(err) {
                reject(err);
            }
        });
    }

    isHumidityNormal() {
        return this.humidity > MIN_HUMIDITY;
    }
}

module.exports = Sensor;
