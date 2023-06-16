require('@nomicfoundation/hardhat-toolbox');
require("@nomicfoundation/hardhat-verify");

require('dotenv').config({ path: '../env/.env' });
require('dotenv').config({ path: '../env/blockchain.env' });

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: '0.8.18',
  networks: {
    bsctest: {
      url: process.env.NETWORK_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  }
};
