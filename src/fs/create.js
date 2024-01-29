import fs, { access } from'node:fs/promises';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const create = async () => {
    try {
        const content = 'I am fresh and young!';
        await fs.writeFile(`${__dirname}/files/fresh.txt`, content, { flag: "wx" });
    }
    catch (err) {
        if (err.code === "EEXIST") {
            throw new Error("FS operation failed");
        }
    }
};

await create();