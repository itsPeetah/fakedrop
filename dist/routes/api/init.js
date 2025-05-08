"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("../../lib/context/store");
const keys_1 = require("../../lib/context/keys");
const initHandler = (_req, res) => {
    const address = (0, store_1.getGlobal)(keys_1.GLOBAL_HOST_KEY);
    const port = (0, store_1.getGlobal)(keys_1.GLOBAL_PORT_KEY);
    const client = `http://${address}:${port}/client`;
    return res.json({ address, port, client });
};
exports.default = initHandler;
//# sourceMappingURL=init.js.map