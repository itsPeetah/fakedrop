export default function getTransferFilename(prefix: string = "fakedrop") {
    return `${prefix}_${new Date(Date.now())}.zip`
};
