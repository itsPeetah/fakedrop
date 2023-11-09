import { RequestHandler } from "express";

const uploadHandler: RequestHandler = (req, res, _next) => {
    console.log("upload")
    console.log(req.headers)
    res.redirect("/")
}

export default uploadHandler