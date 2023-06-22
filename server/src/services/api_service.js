const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const routers = require('../routes/routes');

const apiService = express();
const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

apiService.use(express.json());
apiService.use(express.urlencoded({ extended: true }));
apiService.use(cors());
apiService.options('*', cors());
apiService.use('/api', routers);
apiService.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

module.exports = https.createServer(options, apiService);