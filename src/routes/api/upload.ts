import download from "downloads-folder";
import { RequestHandler } from "express";
import multer from "multer";
import getTransferFilename from "../../lib/file/getTransferFilename";
import path from "path";

const storage = multer.diskStorage(
    {
        destination: path.join(download(), "/FakeDrop"),
        filename: function (_req, file, cb) {
            cb(null, getTransferFilename(file.originalname));
        }
    }
);

const upload = multer({ storage });
export const uploadMiddleware = upload.single('file');

const uploadHandler: RequestHandler = (req, res, _next) => {

    console.log(req.body);
    console.log(req.file);

    res.status(200)
}

export default uploadHandler