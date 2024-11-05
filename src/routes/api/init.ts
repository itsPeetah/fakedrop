import { RequestHandler } from 'express';
import { getGlobal } from "../../lib/context/store";
import { GLOBAL_HOST_KEY, GLOBAL_PORT_KEY } from '../../lib/context/keys';

const initHandler: RequestHandler = (_req, res) => {

    const address = getGlobal(GLOBAL_HOST_KEY)
    const port = getGlobal(GLOBAL_PORT_KEY)
    const client =`http://${address}:${port}/client`

    return res.json({ address, port, client });

}

export default initHandler;