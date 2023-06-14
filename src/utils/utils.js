const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');

module.exports.hashPassword = (password) => {
    return crypto.SHA512(password).toString();
}

module.exports.generateJWT = (data) => {
    const jwtSecretKey = process.env.JWT_KEY;
    const payload = {
        data: data,
    };
    const option = {
        algorithm: 'HS512',
        expiresIn: process.env.JWT_EXPIRES_IN,
    }
    return jwt.sign(payload, jwtSecretKey, option);
}

module.exports.generateUUID = () => { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'uid-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}