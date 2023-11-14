import findFreePorts from "find-free-ports";


export default async function getFreePort(options: { startPort?: number, endPort?: number }) {
    const { startPort, endPort } = options
    return (await findFreePorts(1, { startPort, endPort }))[0]
}