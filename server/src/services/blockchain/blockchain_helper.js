const web3 = require('./blockchain_web3');

module.exports.generateAccount = (random1, random2) => {
    const privateKey = web3.utils.keccak256(random1 + random2);
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const privateKeyV3 = account.privateKey;
    const address = account.address;
    return {
        privateKey: privateKeyV3,
        address: address,
    };
};

module.exports.sendTransaction = async ({ contract, userAddress, privateKey, methodName, methodArgs }) => {
    const encodedABI = contract.methods[methodName](...methodArgs).encodeABI();
    var txObject = {
        from: userAddress,
        to: contract.options.address,
        data: encodedABI,
    };
    const gasLimit = await web3.eth.estimateGas(txObject);
    txObject.gas = gasLimit;
    const gasPrice = await web3.eth.getGasPrice();
    txObject.gasPrice = gasPrice;
    try{
        const signedTx = await web3.eth.accounts.signTransaction(txObject, privateKey);
        const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        console.log('The transaction has been sent and confirmed on the blockchain.');
        console.log('Transaction hash:', transactionReceipt.transactionHash);
    }catch(e){
        console.log('Transaction submission failed: ', e);
    }
};


module.exports.toWei = (amount) => {
    return web3.utils.toWei(amount, 'ether');
};
