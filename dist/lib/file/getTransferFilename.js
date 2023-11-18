"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTransferFilename(filename = "fakedrop") {
    return `${Date.now()}_${filename}`;
}
exports.default = getTransferFilename;
;
//# sourceMappingURL=getTransferFilename.js.map