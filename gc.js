const memory = [];
let k = 0;
const bytesToMb = (bytes) => Math.round(bytes / 1000, 2) / 1000;
console.log(gc);
let collection = {};

const timer = setInterval(() => {
  k++;
  const key = "globalVar " + k;
  collection[key] = new Array(1000).fill(key);
}, 5);

setInterval(() => {
  console.clear();
  const usage = process.memoryUsage();

  const row = {
    rss: bytesToMb(usage.rss), // process size
    heapTotal: bytesToMb(usage.heapTotal), // v8 heap total
    heapUsed: bytesToMb(usage.heapUsed), // v8 heap used
    external: bytesToMb(usage.external), // c++ allocated
    stack: bytesToMb(usage.rss - usage.heapTotal),
  };
  memory.push(row);

  console.table(memory);
}, 1000);

setTimeout(() => {
  clearInterval(timer);

  if (global.gc) {
    collection = {};
    gc();
  }
}, 5000);

setTimeout(() => {
  process.exit(0);
  console.table(memory[0]);
}, 15000);
