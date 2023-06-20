const BlockchainConfig = require('./config');

const { ethers } = require("hardhat");

var config = new BlockchainConfig();

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account:', deployer.address);
    const token = await ethers.deployContract('CucCungToken');
    config.tokenAddress = await token.getAddress();
}

main().then(() => {
    let config = new BlockchainConfig();
    console.log(`Token Address: ${config.tokenAddress}`);
});

module.exports = main;