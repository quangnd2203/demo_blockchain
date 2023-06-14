class NetworkResponse{
    constructor(status, message, data){
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

NetworkResponse.fromErrors = function(error){
    return new NetworkResponse(
        status = 0,
        message = error,
        data = null,
    );
}

module.exports = NetworkResponse;