const {Web3} = require('web3');

async function interact(){
    web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    const privateKey = web3.utils.keccak256('quangnd2203' + 'Aa22032001!!!');
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const privateKeyV3 = account.privateKey;
    const address = account.address;
    console.log(privateKey);
    console.log(privateKeyV3);
    console.log(address);
}

interact();