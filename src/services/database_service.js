const mongoose = require('mongoose');

module.exports.createConnection = (next) => {
    const config = {
        dbName: process.env.DB_NAME
    };
    mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongo:27017/`, config, (error) => {
        if (error) throw error;
        next();
    });
}
