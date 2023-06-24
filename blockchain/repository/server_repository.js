const axiosInstance = require('../scripts/axios');
const { readFileJson } = require('../scripts/utils');

module.exports.changeTokenAddress = async (address) => {
    const abi = await readFileJson('../artifacts/contracts/cuc_cung_token.sol/CucCungToken.json');
    axiosInstance.post(`https://host.docker.internal:3000/api/token/config`, {
        tokenAddress: address,
        tokenAbi: JSON.stringify(abi.abi),
    }, {
        headers:{
            'api-key': process.env.SERVER_API_KEY
        }
    });
}