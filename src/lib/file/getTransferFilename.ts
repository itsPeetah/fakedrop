export default function getTransferFilename(filename: string = "fakedrop") {
    return `${Date.now()}_${filename}`
};
