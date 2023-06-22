require('@nomicfoundation/hardhat-toolbox');
require("@nomicfoundation/hardhat-verify");
require('dotenv').config();
const task = require('./scripts/task');
const networks = require('./scripts/network');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.18',
  networks: networks,
  etherscan: {
    apiKey: process.env.API_KEY
  },
  task: task,
};
