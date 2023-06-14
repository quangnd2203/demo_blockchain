// const NetworkResponse = require('../models/network_response');
// const UserModel = require('../models/user_model');
// const authRepository = require('../repositories/auth_repository');
// const socialRepository = require('../repositories/social_repository');
// const utils = require('../utils/utils');
// const { validationResult } = require('express-validator');

// module.exports.loginNormal = async (request) => {
//     try {
//         const errors = validationResult(request);
//         if (!errors.isEmpty()) throw Error(errors.array()[0].msg);

//         const body = request.body;
//         const hashPass = utils.hashPassword(body.password);
//         const networkResponse = await authRepository.login(body.email, hashPass, body.fcmToken);
//         return networkResponse;
//     } catch (e) {
//         console.log(e);
//         return NetworkResponse.fromErrors(e.message || 'wrong_email_or_pass');
//     }
// };

// module.exports.register = async (request) => {
//     try {
//         const errors = validationResult(request);
//         if (!errors.isEmpty()) throw Error(errors.array()[0].msg);

//         const body = request.body;
//         let hassPass = null;
//         if (body.password != null) hassPass = utils.hashPassword(body.password);
//         const networkResponse = await authRepository.register(body.name, body.email, hassPass, 'normal', body.fcmToken);
//         return networkResponse;
//     } catch (e) {
//         console.log(e);
//         return NetworkResponse.fromErrors(e.message || 'cant_register');
//     }
// }

// module.exports.loginSocial = async (request) => {
//     try {
//         const errors = validationResult(request);
//         if (!errors.isEmpty()) throw Error(errors.array()[0].msg);

//         const body = request.body;
//         const socialUser = await socialRepository.loginSocial(body.socialToken, body.accountType);
//         const networkResponse = await authRepository.loginSocical(socialUser.name, socialUser.id.toString(), body.accountType, body.fcmToken);
//         return networkResponse;
//     } catch (e) {
//         console.log(e);
//         return NetworkResponse.fromErrors(e.message || 'cant_get_user');
//     }
// }

// module.exports.authorized = async (user, token) => {
//     return new NetworkResponse(
//         1,
//         null,
//         {
//             user: user,
//             accessToken: token,
//         }
//     );
// }