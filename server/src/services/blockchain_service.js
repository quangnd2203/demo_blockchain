const {Web3} = require('web3');
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
const ContractConfig = require('../models/smart_contract_info_model');
var viviPointContract;

module.exports.generateAccount = (random1, random2) => {
    const privateKey = web3.utils.keccak256(random1 + random2);
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const privateKeyV3 = account.privateKey;
    const address = account.address;
    return {
        privateKey: privateKeyV3,
        address: address,
    };
}

module.exports.init = async () => {
    const viviPointModel = await ContractConfig.getInfoByName('viviPoint');
    viviPointContract = new web3.eth.Contract(viviPointModel.info.abi, viviPointModel.info.address);
    return viviPointModel.info.address;
}
