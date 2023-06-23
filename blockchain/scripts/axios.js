const axios = require('axios');
const https = require('https');

const httpAgent = new https.Agent({
  rejectUnauthorized: false
});

module.exports = axios.create({
    httpsAgent: httpAgent,
  })