const {check} = require('express-validator');

module.exports.validateEmail = () => this.validateRequired('email').isEmail().withMessage('email_invalid');

module.exports.validateName = () => this.validateRequired('name').isLength({min: 6}).withMessage('name_too_short');

module.exports.validateAccountTypeSocial = () => check('accountType').notEmpty().withMessage('accountType_is_required').isIn(['google','facebook']).withMessage('accountType_is_wrong');

module.exports.validateAccountType = () => check('accountType').notEmpty().withMessage('accountType_is_required').isIn(['google','facebook','normal']).withMessage('accountType_is_wrong');

module.exports.validateRequired = (key) => check(key).notEmpty().withMessage(`${key}_is_required`);

module.exports.validatePassword = () => this.validateRequired('password').isStrongPassword({minLength: 6, minUppercase: 1, minNumbers: 1}).withMessage('password_invalid');