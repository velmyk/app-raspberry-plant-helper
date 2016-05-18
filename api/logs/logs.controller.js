const
    OK = 200,
    CREATED = 201,
    NOT_FOUND = 404;

const
    Log = require('./logs.model');

const
    getAll = (req, res) => {
        return Log.find()
            .then(result => {
                res.status(OK).json({
                    status: 'success',
                    total: result.length,
                    responses: result
                });
            })
            .catch(err => {
                res.status(NOT_FOUND).json(err);
            });
    };

const
    add = (log) => {
        const modelInstance = new Log(log);
        return modelInstance.save();
    };

module.exports = {
    getAll: getAll,
    add
}