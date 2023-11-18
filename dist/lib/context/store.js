"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGlobal = exports.getGlobal = exports.GLOBAL_STORE = void 0;
exports.GLOBAL_STORE = new Map();
function getGlobal(key, defaultValue) {
    if (exports.GLOBAL_STORE.has(key))
        return exports.GLOBAL_STORE.get(key);
    return defaultValue;
}
exports.getGlobal = getGlobal;
function setGlobal(key, value) {
    exports.GLOBAL_STORE.set(key, value);
}
exports.setGlobal = setGlobal;
//# sourceMappingURL=store.js.map