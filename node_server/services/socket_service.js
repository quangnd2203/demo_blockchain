const app = require('express')();
const http = require('http');
const authorizeSocket = require('../middlewares/authorize_middleware').authorizeSocket;
const socketIo = require('socket.io');
const socketService = http.Server(app);
const io = new socketIo.Server(socketService);

const onConnection = (socket) => {
     require('../sockets/base_socket')(io, socket);
}

io.on('connection', (socket) => {
    onConnection(socket);
});

io.use(authorizeSocket);

module.exports = socketService;