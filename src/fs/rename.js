import fs, { access, readdir, rename as fsRename } from'node:fs/promises';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url)); 
const newFileName = "properFilename.md";


const rename = async () => {
    try {
        await access(`${__dirname}/files/wrongFilename.txt`, fs.constants.R_OK);
        const folder = await readdir(`${__dirname}/files`);
        if (folder.includes(newFileName)) {
            throw new Error("File already exists");
        }
        await fsRename(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/${newFileName}`);
    }
    catch (error) {
        console.log(error);
        throw new Error("FS operation failed");
    }
};

await rename();