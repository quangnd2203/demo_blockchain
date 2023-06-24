const express = require('express');
const router = express.Router();
const {authrorizeApiKey} = require('../middlewares/authorize_middleware');
const controller = require('../controller/token_controller');
const authValidation = require('../validations/token_validation');

router.post('/config', authrorizeApiKey, authValidation.updateTokenConfigValidate(), async (request, response) => {
    controller.updateConfigBlockchain(request).then((value) => {
        response.status(value.code).send(value);
    });
});

module.exports = router;