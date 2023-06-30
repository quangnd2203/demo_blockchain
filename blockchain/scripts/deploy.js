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
  return JSON.parse(result);
}

async function verifyContract(contract) {
  const command = `npx hardhat verify --network ${network} ${contract.address}`;
  const result = await utils.executeCommand(command);
  console.log(result);
}

async function main() {
  await compileContract();
  const contracts = await deployContract();
  await utils.sleep(7000); 
  repo.changeTokenAddress(contracts);
  await verifyContract(contracts.viviPoint);
}

main().then(() => {
  console.log(`Deploy success on ${network}`);
}).catch((error) => {
  console.error(error);
});