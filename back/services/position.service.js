const Position = require('../models/Position.model');
const errorHandler = require('../utils/errorHandler');

module.exports.getByCategoryId = async (req, res) => {
    try {
        const position = await Position.find({
            category: req.params.category,
            user: req.user.id,
        });
        res.status(200).json(positions);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.create = (req, res) => {
    try {
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.remove = (req, res) => {
    try {
    } catch (e) {
        errorHandler(res, e);
    }
};

try {
} catch (e) {
    errorHandler(res, e);
}
module.exports.update = (req, res) => {};
