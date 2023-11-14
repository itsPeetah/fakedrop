import download from "downloads-folder";
import { RequestHandler } from "express";
import multer from "multer";
import getTransferFilename from "../../lib/file/getTransferFilename";

const storage = multer.diskStorage(
    {
        destination: download(),
        filename: function (_req, _file, cb) {
            //req.body is empty...
            //How could I get the new_file_name property sent from client here?
            cb(null, getTransferFilename());
        }
    }
);

const upload = multer({ storage });
export const uploadMiddleware = upload.single('upl');

const uploadHandler: RequestHandler = (req, res, _next) => {

    console.log(req.body);
    console.log(req.file);

    res.status(200)
}

export default uploadHandler