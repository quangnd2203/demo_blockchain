const axios = require('axios');

module.exports.changeTokenAddress = (address) => {
    axios.post(`${process.env.SERVER_BASE}/api/token_address`, {
        token_address: address
    }, {
        headers:{
            'api-key': process.env.SERVER_API_KEY
        }
    })
}