import { createReadStream } from'node:fs';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "crypto";

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const calculateHash = async () => {
    const hash = createHash('sha256');

    const input = createReadStream(`${__dirname}/files/fileToCalculateHashFor.txt`);
    input.on('readable', () => {
        const data = input.read();
        if (data)
            hash.update(data);
        else {
            console.log(hash.digest('hex'));
        }
    });
};

await calculateHash();