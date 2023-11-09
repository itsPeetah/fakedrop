import { Router, static as express_static } from 'express';

const routes = Router();

routes.use("/", express_static("public"))
export default routes;