import { dirname } from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "fs";
import { stdout } from "process";

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const read = async () => {
    createReadStream(`${__dirname}/files/fileToRead.txt`).pipe(stdout);
};

await read();