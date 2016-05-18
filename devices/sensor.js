const
    sensorLib = require('node-dht-sensor'),

const
    MIN_HUMIDITY = 50;

// const
//     sensor = {
//         initialize: () => sensorLib.initialize(22, 4),
//         read: () => {
//             const
//                 readout = sensorLib.read();

//             console.log(`Temperature: ${readout.temperature.toFixed(2)}C, humidity: ${readout.humidity.toFixed(2)}%`);
//             return readout.humidity.toFixed(2);
//         },
//         isHumidityNormal: humidity => humidity > MIN_HUMIDITY
//     };

class Sensor {
    constructor() {
        sensorLib.initialize(22, 4);
        this.humidity = null;
    }

    read() {
        this.humidity = sensorLib.read().humidity.toFixed(2);
        console.log(`Temperature: ${readout.temperature.toFixed(2)}C, humidity: ${readout.humidity.toFixed(2)}%`);
    }

    isHumidityNormal() {
        return this.humidity > MIN_HUMIDITY;
    }
}