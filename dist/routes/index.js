"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const routes = (0, express_1.Router)();
const publicRoot = path_1.default.resolve(__dirname, "..", "..", "public");
routes.use("/", (0, express_1.static)(publicRoot));
exports.default = routes;
//# sourceMappingURL=index.js.map