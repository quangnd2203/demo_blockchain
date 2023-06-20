const { exec } = require('child_process');

async function deployContract() {
  const network = 'bsctest';

  const command = `npx hardhat deploy --network ${network}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Error deploying contract:', error);
      return;
    }
    console.log(stdout);
  });
}

deployContract();