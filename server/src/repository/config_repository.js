const NetworkResponse = require('../models/network_response');
const ConfigModel = require('../models/config_model');

const keyContractAddress = 'contract_address';
const keyContractAbi = 'contract_abi'

module.exports.updateConfigBlockchain = async (address, abi) => {
    await ConfigModel.updateKey(keyContractAddress, address);
    await ConfigModel.updateKey(keyContractAbi, abi);
    return NetworkResponse.success(
        data = null,
        message = 'update_config_success',
    );
}

module.exports.getConfig = async (key) => {
    const data = await ConfigModel.getByKey(key);
    return NetworkResponse.success(
        data = data,
    );
}

module.exports.getAll = async () => {
    const data = await ConfigModel.getAllConfig();
    return NetworkResponse.success(
        data = data,
    );
}