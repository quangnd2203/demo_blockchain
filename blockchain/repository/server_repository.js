const axiosInstance = require('../scripts/axios');

module.exports.changeTokenAddress = async (contracts) => {
    axiosInstance.post(`https://host.docker.internal:3000/api/token/contracts`, {contracts: contracts}, {
        headers: {
            'api-key': process.env.SERVER_API_KEY
        }
    });
}