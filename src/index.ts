import express from "express"
import routes from "./routes"
import apiRoutes from "./routes/api"
import getLocalAddress from "./lib/networking/getLocalAddress"
import getFreePort from "./lib/networking/getFreePort"
import { setGlobal } from "./lib/context/store"
import { GLOBAL_DLDIR_KEY, GLOBAL_HOST_KEY, GLOBAL_PORT_KEY } from "./lib/context/keys"
import download from "downloads-folder"
import { exec } from "child_process"

const app = express()
app.use(express.json())
app.use(routes)
app.use("/api", apiRoutes)


getFreePort({ startPort: 5000 }).then((port) => {
    const address = getLocalAddress()

    const dls = download()
    setGlobal(GLOBAL_DLDIR_KEY, dls)
    setGlobal(GLOBAL_HOST_KEY, address)
    setGlobal(GLOBAL_PORT_KEY, port)

    app.listen(port, () => {
        const addr = `http://${address}:${port}`
        console.log(`Server started @ ${addr}`);
        var start = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
        exec(`${start} ${addr}`)
    })
})
