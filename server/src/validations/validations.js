const {check} = require('express-validator');

module.exports.validateRequired = (key) => check(key).notEmpty().withMessage(`${key}_is_required`);