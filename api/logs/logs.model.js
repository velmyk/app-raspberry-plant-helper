const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const
    LogSchema = new Schema({
        humidity: {
            type: String,
            required: true
        },
        time: {
            type: Date,
            required: true
        }
    }, {collection: 'logs'});

module.exports = mongoose.model('Log', LogSchema);