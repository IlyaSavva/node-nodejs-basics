import fs, { access } from'node:fs/promises';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const copy = async () => {
    try {
        await access(`${__dirname}/files`, fs.constants.R_OK);
        await fs.cp(`${__dirname}/files`, `${__dirname}/files_copy`, { recursive: true, errorOnExist: true, force: false });
    }
    catch (err) {
        throw new Error("FS operation failed");
    }
};

await copy();
