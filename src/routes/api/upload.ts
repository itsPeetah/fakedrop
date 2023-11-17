import download from "downloads-folder";
import { RequestHandler } from "express";
import multer from "multer";
import getTransferFilename from "../../lib/file/getTransferFilename";
import path from "path";
import { existsSync, mkdir } from "fs";

const destination = path.join(download(), "/FakeDrop")

const storage = multer.diskStorage({
  destination,
  filename: function (_req, file, cb) {

    if (!existsSync(destination))
      mkdir(destination, (err) => {
        if (err) console.log(err.message)
        else
          console.log("Created /FakeDrop folder in Downloads")
      })

    cb(null, getTransferFilename(file.originalname));
  },
});

const upload = multer({ storage });
export const uploadMiddleware = upload.single("file");

const uploadHandler: RequestHandler = async (req, res, _next) => {
  console.log("Received file:", req.file?.filename);
  //   console.log(req.file);
  res.status(200);
};

export default uploadHandler;
