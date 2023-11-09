import { Router } from "express";
import helloHandler from "./hello";

const apiRoutes = Router();

apiRoutes.get('/hello', helloHandler)

export default apiRoutes