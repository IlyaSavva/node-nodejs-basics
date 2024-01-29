import { createReadStream, createWriteStream } from'node:fs';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const compress = async () => {
    const readStream = createReadStream(`${__dirname}/files/fileToCompress.txt`);
    const writeStream = createWriteStream(`${__dirname}/files/archive.gz`);
    const gzip = zlib.createGzip();
    readStream.pipe(gzip).pipe(writeStream);
};

await compress();