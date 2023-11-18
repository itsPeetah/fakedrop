"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMiddleware = void 0;
const downloads_folder_1 = __importDefault(require("downloads-folder"));
const multer_1 = __importDefault(require("multer"));
const getTransferFilename_1 = __importDefault(require("../../lib/file/getTransferFilename"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const destination = path_1.default.join((0, downloads_folder_1.default)(), "/FakeDrop");
const storage = multer_1.default.diskStorage({
    destination,
    filename: function (_req, file, cb) {
        if (!(0, fs_1.existsSync)(destination))
            (0, fs_1.mkdir)(destination, (err) => {
                if (err)
                    console.log(err.message);
                else
                    console.log("Created /FakeDrop folder in Downloads");
            });
        cb(null, (0, getTransferFilename_1.default)(file.originalname));
    },
});
const upload = (0, multer_1.default)({ storage });
exports.uploadMiddleware = upload.single("file");
const uploadHandler = async (req, res, _next) => {
    var _a;
    console.log("Received file:", (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename);
    res.status(200);
};
exports.default = uploadHandler;
//# sourceMappingURL=upload.js.map