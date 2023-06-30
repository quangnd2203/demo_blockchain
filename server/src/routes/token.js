const express = require('express');
const router = express.Router();
const {authrorizeApiKey} = require('../middlewares/authorize_middleware');
const controller = require('../controller/token_controller');
const tokenValidation = require('../validations/token_validation');

router.post('/contracts', authrorizeApiKey, tokenValidation.updateContractInfo(), async (request, response) => {
    controller.updateConfigBlockchain(request).then((value) => {
        response.status(value.code).send(value);
    });
});

router.post('/generate', authrorizeApiKey, tokenValidation.generateAccountValidate(), async (request, response) => {
    controller.generateAccount(request).then((value) => {
        response.status(value.code).send(value);
    });
});

module.exports = router;