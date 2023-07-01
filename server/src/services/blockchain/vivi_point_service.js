const blockchainHelper = require('./blockchain_helper');
const ContractConfig = require('../../models/smart_contract_info_model');
const web3 = require('./blockchain_web3');

var viviPointContract;

module.exports.transfer = ({userAddress, privateKey, toAddress, amount}) => {
    return blockchainHelper.sendTransaction({
        contract: viviPointContract,
        userAddress: userAddress,
        privateKey: privateKey,
        methodName: 'transfer',
        methodArgs: [toAddress, blockchainHelper.toWei(amount)],
    });
}

module.exports.init = async () => {
    const viviPointModel = await ContractConfig.getInfoByName('viviPoint');
    viviPointContract = new web3.eth.Contract(viviPointModel.info.abi, viviPointModel.info.address);
    return [viviPointModel.info.address];
};