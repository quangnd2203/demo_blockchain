const databaseService = require('./services/database_service');
const socketService = require('./services/socket_service');
const apiService = require('./services/api_service');
const utils = require('./utils/utils');
require('dotenv').config('./.env');

databaseService.createConnection( async () => {
    apiService.listen(process.env.SERVER_PORT, () => {
        console.log(`Server is up and running on port: ${process.env.SERVER_PORT}`);
    });
    socketService.listen(process.env.SOCKET_PORT, () => {
        console.log(`Socket.io is up and running on port: ${process.env.SOCKET_PORT}`);
    });
});


