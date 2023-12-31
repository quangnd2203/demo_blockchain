const utils = require('./utils');
const repo = require('../repository/server_repository');
require('dotenv').config();
const network = 'bsctest';

async function compileContract() {
  const command = 'npx hardhat compile';
  return utils.executeCommand(command);
}

async function deployContract() {
  const command = `npx hardhat deploy --network ${network}`;
  const result = await utils.executeCommand(command);
  const data = (result).split('\n');
  console.log(result);
  return data[data.length - 1];
}

async function verifyContract(deployAddress) {
  const command = `npx hardhat verify --network ${network} ${deployAddress}`;
  const result = await utils.executeCommand(command);
  console.log(result);
}

async function main() {
  await compileContract();
  const deployAddress = await deployContract();
  await utils.sleep(7000); 
  repo.changeTokenAddress(deployAddress);
  await verifyContract(deployAddress);
}

main().then(() => {
  console.log(`Deploy success on ${network}`);
}).catch((error) => {
  console.error(error);
});