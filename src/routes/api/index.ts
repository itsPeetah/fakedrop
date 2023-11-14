import { Router } from "express";
import helloHandler from "./hello";
import uploadHandler, { uploadMiddleware } from "./upload";
import initHandler from "./init";

const apiRoutes = Router();



apiRoutes.get('/hello', helloHandler)
apiRoutes.get("/init", initHandler)

apiRoutes.post("/upload", uploadMiddleware, uploadHandler)
export default apiRoutes