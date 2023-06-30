const { task } = require('hardhat/config');
const { readFileJson } = require('../scripts/utils');

task('deploy', 'Deploy to network', async () => {
    const [deployer] = await ethers.getSigners();
    const token = await ethers.deployContract('ViViPoint');
    const abi = await readFileJson('../artifacts/contracts/vivi_point.sol/ViViPoint.json');
    console.log(`
        {
            "viviPoint": {
                "address": "${await token.getAddress()}",
                "abi": ${JSON.stringify(abi.abi)}
            }
        }
    `);
});

module.exports = {
    deploy: 'deploy',
};