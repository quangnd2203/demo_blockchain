const {validateRequired} = require('./validations');

module.exports.updateContractInfo = () => [
    validateRequired('contracts').isObject(),
];

module.exports.generateAccountValidate = () => [
    validateRequired('account'),
    validateRequired('password'),
]