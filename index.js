'use strict';

const
    express = require('express'),
    mongoose = require('mongoose');

const
    WaterMachine = require('./devices/water-machine');

mongoose.Promise = require('q').Promise;

const
    app = express(),
    server = require('http').Server(app),
    waterMachine = new WaterMachine();

// mongoose.connect(process.env.MONGODB_URI, new Boolean(process.env.MONGO_OPTIONS_DB_SAFE));
// mongoose.connection.on('error', (err) => {
//         console.error('MongoDB connection error: ' + err);
//         process.exit(-1);
//     }
// );

waterMachine.run();

server.listen(process.env.PORT, process.env.IP, () => {
    console.log(`Express server listening on ${process.env.PORT}, in ${process.env.NODE_ENV} mode`);
});
