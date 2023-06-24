const repo = require('../repository/config_repository');
const { validationResult } = require('express-validator');
const NetworkResponse = require('../models/network_response');

module.exports.updateConfigBlockchain = async (request) => {
    try{
        const errors = validationResult(request);
        if (!errors.isEmpty()) throw Error(errors.array()[0].msg);
        const body = request.body;
        return repo.updateConfigBlockchain(body.tokenAddress, body.tokenAbi);
    } catch (e){
        console.error(e);
        return NetworkResponse.fromErrors(400, e.message || 'update_fail');
    }
}