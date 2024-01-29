import { createReadStream, createWriteStream } from'node:fs';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const decompress = async () => {
    const readStream = createReadStream(`${__dirname}/files/archive.gz`);
    const writeStream = createWriteStream(`${__dirname}/files/fileToCompress.txt`);
    const unzip = zlib.createUnzip();
    readStream.pipe(unzip).pipe(writeStream);
};

await decompress();