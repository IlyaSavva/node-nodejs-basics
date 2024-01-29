import { readFile } from'node:fs/promises';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    try {
        const file = await readFile(`${__dirname}/files/fileToRead.txt`, { encoding: "utf8" });
        console.log(file);
    }
    catch (err) {
        throw new Error("FS operation failed");
    }
};

await read();