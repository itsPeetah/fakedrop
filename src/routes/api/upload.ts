import download from "downloads-folder";
import { RequestHandler } from "express";
import multer from "multer";
import getTransferFilename from "../../lib/file/getTransferFilename";
import path from "path";
import { existsSync, mkdir } from "fs";

const destination = path.join(download(), "/FakeDrop");
if (!existsSync(destination))
  mkdir(destination, (err) => {
    if (err) console.log(err.message);
    else console.log("Created /FakeDrop folder in Downloads");
  });

const storage = multer.diskStorage({
  destination,
  filename: function (_req, file, cb) {
    cb(null, getTransferFilename(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: {
    /** Maximum size of each form field value in bytes. (Default: 1048576) */
    fieldSize: 1000000000,
  },
});
export const uploadMiddleware = upload.single("file");

const uploadHandler: RequestHandler = async (req, res, _next) => {
  console.log("Received file:", req.file?.filename);
  //   console.log(req.file);
  res.status(200);
  res.send("OK");
  res.end();
};

export default uploadHandler;
