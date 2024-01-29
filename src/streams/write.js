import { dirname } from "path";
import { fileURLToPath } from "url";
import { createWriteStream } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    process.stdin.pipe(createWriteStream(`${__dirname}/files/fileToWrite.txt`));
};

await write();