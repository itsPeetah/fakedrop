"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("../../lib/context/store");
const keys_1 = require("../../lib/context/keys");
const path_1 = __importDefault(require("path"));
const constants_1 = require("../../lib/constants");
const initHandler = (_req, res) => {
    const address = (0, store_1.getGlobal)(keys_1.GLOBAL_HOST_KEY);
    const port = (0, store_1.getGlobal)(keys_1.GLOBAL_PORT_KEY);
    const client = path_1.default.join(`http://${address}:${port}`, constants_1.CLIENT_LANDING);
    return res.json({ address, port, client });
};
exports.default = initHandler;
//# sourceMappingURL=init.js.map