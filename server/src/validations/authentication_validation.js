const {validateRequired} = require('./validations');

validateEmail = () => validateRequired('email').isEmail().withMessage('email_invalid');

validateName = () => validateRequired('name').isLength({min: 6}).withMessage('name_too_short');

validateAccountTypeSocial = () => validateRequired('accountType').notEmpty().withMessage('accountType_is_required').isIn(['google','facebook']).withMessage('accountType_is_wrong');

validateAccountType = () => validateRequired('accountType').notEmpty().withMessage('accountType_is_required').isIn(['google','facebook','normal']).withMessage('accountType_is_wrong');

validatePassword = () => validateRequired('password').isStrongPassword({minLength: 6, minUppercase: 1, minNumbers: 1}).withMessage('password_invalid');

module.exports.loginSocialValidate = () => [
    validateRequired('socialToken'),
    validateAccountTypeSocial(),
    validateRequired('fcmToken'),
];

module.exports.registerAccountValidate = () => [
    validateName(),
    validateEmail(),
    validatePassword(),
    validateRequired('fcmToken'),
];

module.exports.loginValidate = () => [
    validateEmail(),
    validatePassword(),
    validateRequired('fcmToken'),
];
