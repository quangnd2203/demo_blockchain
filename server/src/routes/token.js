const express = require('express');
const router = express.Router();
const {authrorizeApiKey} = require('../middlewares/authorize_middleware');
const NetworkResponse = require('../models/network_response');

router.post('/token_address', authrorizeApiKey, (request, response) => {
    process.env.TOKEN_ADDRESS = request.body.token_address;
    console.log(process.env.TOKEN_ADDRESS);
    response.send(NetworkResponse.success(null, 'update_success'))
});

module.exports = router;

