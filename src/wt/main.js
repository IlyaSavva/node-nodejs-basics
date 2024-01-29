import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { cpus } from "os";
import { Worker } from "worker_threads";

const __dirname = dirname(fileURLToPath(import.meta.url)); 

const performCalculations = async () => {
    const coresCount = cpus().length;
    const workers = []
    for (let i = 0; i < coresCount; i++) {
        workers.push(
            new Promise((res, rej) => {
                const worker = new Worker(`${__dirname}/worker.js`, { workerData: 10 + i });
                worker.on("message", (result) => {
                    res({ status: "resolved", data: result });
                });
                worker.on("error", (err) => {
                    console.log(err);
                    rej({ status: "error", data: null });
                });
            })
        )
    }
    const results = await Promise.allSettled(workers);
    console.log(results.map(item => item.value ? item.value : item.reason ));

};

await performCalculations();