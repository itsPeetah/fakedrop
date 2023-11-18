"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const find_free_ports_1 = __importDefault(require("find-free-ports"));
async function getFreePort(options) {
    const { startPort, endPort } = options;
    return (await (0, find_free_ports_1.default)(1, { startPort, endPort }))[0];
}
exports.default = getFreePort;
//# sourceMappingURL=getFreePort.js.map