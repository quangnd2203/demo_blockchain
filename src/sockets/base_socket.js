const {Server, Socket} = require("socket.io");

/**
 * 
 * @param {Server} io 
 * @param {Socket} socket 
 */

module.exports = (io, socket) => {
    const helper = new Helper(io, socket);
    helper.onSocketConnected();
    socket.on('disconnect', (data) => {
        console.log("disconnect");
    });
    socket.on('test1', helper.onTest1);
    socket.on('test2', helper.onTest2);
}

/**
 * 
 * @param {Server} io 
 * @param {Socket} socket 
 */

function Helper (io, socket){
    this.onSocketConnected = async () => {
        console.log(`Connected: ${socket.id}`);
    }

    this.onTest1 = async (data) => {
        io.emit('test1', data);
    }

    this.onTest2 = async (data) => {
        io.emit('test2', data);
    }
}