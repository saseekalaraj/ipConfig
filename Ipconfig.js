"use strict"
var os = require('os');
var ifaces = os.networkInterfaces();
var ip;
const ipconfig = function () {
    Object.keys(ifaces).forEach(function (ifname) {
        if (ifname === 'Ethernet') {
            ifaces[ifname].forEach(function (iface) {
                if ('IPv4' !== iface.family || iface.internal !== false) {
                    // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                    return;
                }
                 ip= iface.address;
            });
        }
    });
     return ip
}
module.exports = { ipconfig: ipconfig }