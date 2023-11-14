import { RequestHandler } from 'express';

const helloHandler: RequestHandler = (_req, res) => {
    return res.json({ message: 'Hello World' });

}

export default helloHandler;