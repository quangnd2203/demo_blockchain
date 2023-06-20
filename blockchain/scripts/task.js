const { task } = require('hardhat/config');

task('deploy', 'Deploy to network', async () => {
    const [deployer] = await ethers.getSigners();
    console.log('Deploying contracts with the account:', deployer.address);
    const token = await ethers.deployContract('CucCungToken');
    console.log('Contract address:', await token.getAddress());
});

module.exports = {
    deploy: 'deploy',
};