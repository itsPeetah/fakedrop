import { Router } from "express";
import helloHandler from "./hello";
import uploadHandler from "./upload";

const apiRoutes = Router();

apiRoutes.get('/hello', helloHandler)
apiRoutes.post("/upload", uploadHandler)

export default apiRoutes