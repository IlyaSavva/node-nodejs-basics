// n should be received from main thread
import { parentPort, workerData } from "worker_threads";
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const result = nthFibonacci(workerData);
    if (Math.random() > 0.5) throw new Error('Generated Error');
    parentPort.postMessage(result);
    parentPort.close();
};

sendResult();