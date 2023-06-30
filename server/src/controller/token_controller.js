const repo = require('../repository/config_repository');
const { validationResult } = require('express-validator');
const NetworkResponse = require('../models/network_response');
const blockchainService = require('../services/blockchain_service');
const { hashPassword } = require('../utils/utils');

module.exports.updateConfigBlockchain = async (request) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) throw Error(errors.array()[0].msg);
        const body = request.body;
        return repo.updateConfigBlockchain(body.contracts);
    } catch (e) {
        console.error(e);
        return NetworkResponse.fromErrors(400, e.message || 'update_fail');
    }
}

module.exports.generateAccount = async (request) => {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) throw Error(errors.array()[0].msg);
        const body = request.body;
        const { privateKey, address } = blockchainService.generateAccount(hashPassword(body.account), hashPassword(body.password));
        return NetworkResponse.success(
            data = {
                privateKey: privateKey,
                address: address,
            },
        );
    } catch (e) {
        console.error(e);
        return NetworkResponse.fromErrors(400, e.message || 'generate_fail');
    }
}