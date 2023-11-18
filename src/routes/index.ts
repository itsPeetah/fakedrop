import { Router, static as express_static } from "express";
import path from "path";

const routes = Router();

const publicRoot = path.resolve(__dirname, "..", "..", "public");

routes.use("/", express_static(publicRoot));
export default routes;
