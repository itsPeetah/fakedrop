import { NetworkInterfaceInfo, networkInterfaces } from "os"

const FAMILY = "IPv4"
const LOCALHOST = "127.0.0.1"
const FALLBACK = "0.0.0.0"

function isValid(alias: NetworkInterfaceInfo) {
    return alias.family === FAMILY
        && alias.address !== LOCALHOST
        && !alias.internal
}

export default function getLocalAddress() {
    const interfaces = Object.values(networkInterfaces())
    for (let iface of interfaces) {
        if (!iface) continue
        for (let alias of iface) {
            if (isValid(alias)) {
                return alias.address
            }
        }
    }
    return FALLBACK
}