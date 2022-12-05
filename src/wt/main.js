import { isMainThread, Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
  if (isMainThread) {
    Array.from({ length: cpus().length }, (_, i) => i + 10).forEach((n) => {
      const worker = new Worker("./worker.js", {
        workerData: n,
      });
      worker.on("message", console.log);
      worker.on("error", console.log);
    });
  }
};

await performCalculations();
