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

mongoose.connect(`mongodb://<${process.env.MONGODB_USER}>:<${process.env.MONGODB_PASSWORD}>@ds025792.mlab.com:25792/raspberry-plant-helper`);
mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    }
);

require('./api/routes')(app);

// waterMachine.run();

server.listen(process.env.PORT, process.env.IP, () => {
    console.log(`Express server listening on ${process.env.PORT});
});
