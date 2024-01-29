import { readdir } from'node:fs/promises';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
    try {
        const baseFiles = await readdir(`${__dirname}/files`, { encoding: "utf8", recursive: true });
        console.log(baseFiles);
    }
    catch (err) {
        throw new Error("FS operation failed");
    }
};

await list();