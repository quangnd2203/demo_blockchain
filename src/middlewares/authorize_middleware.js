const jwt = require('jsonwebtoken');
// const authRepository = require('../repositories/auth_repository');
const NetworkResponse = require('../models/network_response');

module.exports.authorizedServer = async (request, response, next) => {
    try{
        const token = request.header('Authorization').replace('Bearer ', '');
        const payload = jwt.verify(token, process.env.JWT_KEY);
        // const networkResponse = await authRepository.authorized(payload.data, token);
        // if(networkResponse.status == 0){
        //     throw new Error();
        // }
        // request.user = networkResponse.data.user;
        request.token = token;
        next();
    }catch(error){
        console.log(error);
        response.status(200).send(NetworkResponse.fromErrors('Not authorized to access this resource'));
    }
}

module.exports.authorizeSocket = async (socket, next) => {
    try{
        const token = socket.handshake.headers.authorization.replace('Bearer ', '');
        const payload = jwt.verify(token, process.env.JWT_KEY);
        // const networkResponse = await authRepository.authorized(payload.data, token);
        // if(networkResponse.status == 0){
        //     throw new Error();
        // }
        // socket.user = networkResponse.data.user;
        socket.token = token;
        next();
    }catch(error){
        console.log(error);
        next(NetworkResponse.fromErrors('Not authorized to access this resource'));
    }
}

