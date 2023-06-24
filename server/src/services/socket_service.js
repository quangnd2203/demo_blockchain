const app = require('express')();
const https = require('https');
const authorizeSocket = require('../middlewares/authorize_middleware').authorizeSocket;
const socketIo = require('socket.io');
const socketService = https.Server(app);
const io = new socketIo.Server(socketService);

const onConnection = (socket) => {
     require('../sockets/base_socket')(io, socket);
}

io.on('connection', (socket) => {
    onConnection(socket);
});

io.use(authorizeSocket);

module.exports = socketService;