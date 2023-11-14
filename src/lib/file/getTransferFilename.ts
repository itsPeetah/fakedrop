export default function getTransferFilename(prefix: string = "fakedrop") {
    return `${prefix}_${Date.now()}.zip`
};
