require('@nomicfoundation/hardhat-toolbox');
require("@nomicfoundation/hardhat-verify");
require('dotenv').config({ path: '../.env' });
const task = require('./scripts/task');

// task("balance", "Prints an account's balance").setAction(async () => {console.log('CCCC')});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.18',
  networks: {
    bsctest: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  },
  task: task,
};
