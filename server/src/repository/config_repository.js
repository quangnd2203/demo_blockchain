const NetworkResponse = require('../models/network_response');
const ContractModel = require('../models/smart_contract_info_model');

const keyContractAddress = 'contract_address';
const keyContractAbi = 'contract_abi'

module.exports.updateConfigBlockchain = async (contracts) => {
    for(let key in contracts){
        if(contracts.hasOwnProperty(key)){
            ContractModel.updateContract(key, contracts[key]);
        }
    }
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