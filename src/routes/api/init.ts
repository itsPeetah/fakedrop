import { RequestHandler } from 'express';
import { getGlobal } from "../../lib/context/store";
import { GLOBAL_HOST_KEY, GLOBAL_PORT_KEY } from '../../lib/context/keys';
import { CLIENT_LANDING } from '../../lib/constants';

const initHandler: RequestHandler = (_req, res) => {

    const address = getGlobal(GLOBAL_HOST_KEY)
    const port = getGlobal(GLOBAL_PORT_KEY)
    const client =`http://${address}:${port}${ CLIENT_LANDING}`

    return res.json({ address, port, client });

}

export default initHandler;