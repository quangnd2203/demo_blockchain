const axiosInstance = require('../scripts/axios');

module.exports.changeTokenAddress = (address) => {
    // send data to server
    axiosInstance.post(`https://host.docker.internal:3000/api/token/token_address`, {
        token_address: address,
        // abi = 
    }, {
        headers:{
            'api-key': process.env.SERVER_API_KEY
        }
    });
}