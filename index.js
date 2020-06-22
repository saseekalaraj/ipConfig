const express = require('express');
const app = express();
const ip = require('./Ipconfig')

const getIp = function () {
    return ip.ipconfig();
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(getIp()))
module.exports.getIp= getIp