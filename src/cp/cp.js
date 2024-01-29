import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { fork } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const spawnChildProcess = async (args) => {
    fork(`${__dirname}/files/script.js`, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["hello", "world", 111, 222]);
