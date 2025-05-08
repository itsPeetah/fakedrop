#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const api_1 = __importDefault(require("./routes/api"));
const getLocalAddress_1 = __importDefault(require("./lib/networking/getLocalAddress"));
const getFreePort_1 = __importDefault(require("./lib/networking/getFreePort"));
const store_1 = require("./lib/context/store");
const keys_1 = require("./lib/context/keys");
const downloads_folder_1 = __importDefault(require("downloads-folder"));
const child_process_1 = require("child_process");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
app.use("/api", api_1.default);
(0, getFreePort_1.default)({ startPort: 5000 }).then((port) => {
    const address = (0, getLocalAddress_1.default)();
    const dls = (0, downloads_folder_1.default)();
    (0, store_1.setGlobal)(keys_1.GLOBAL_DLDIR_KEY, dls);
    (0, store_1.setGlobal)(keys_1.GLOBAL_HOST_KEY, address);
    (0, store_1.setGlobal)(keys_1.GLOBAL_PORT_KEY, port);
    app.listen(port, () => {
        const addr = `http://${address}:${port}`;
        console.log(`Server started @ ${addr}`);
        var start = process.platform == "darwin"
            ? "open"
            : process.platform == "win32"
                ? "start"
                : "xdg-open";
        (0, child_process_1.exec)(`${start} ${addr}`);
    });
});
//# sourceMappingURL=index.js.map