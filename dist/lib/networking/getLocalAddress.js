"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const FAMILY = "IPv4";
const LOCALHOST = "127.0.0.1";
const FALLBACK = "0.0.0.0";
function isValid(alias) {
    return alias.family === FAMILY
        && alias.address !== LOCALHOST
        && !alias.internal;
}
function getLocalAddress() {
    const interfaces = Object.values((0, os_1.networkInterfaces)());
    for (let iface of interfaces) {
        if (!iface)
            continue;
        for (let alias of iface) {
            if (isValid(alias)) {
                return alias.address;
            }
        }
    }
    return FALLBACK;
}
exports.default = getLocalAddress;
//# sourceMappingURL=getLocalAddress.js.map