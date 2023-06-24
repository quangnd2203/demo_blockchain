const {validateRequired} = require('./validations');

validationTokenAddress = () => validateRequired('tokenAddress').isEthereumAddress().withMessage('address_invalid');

validationTokenAbi = () => validateRequired('tokenAbi');

module.exports.updateTokenConfigValidate = () => [
    validationTokenAddress(),
    validationTokenAbi(),
];
