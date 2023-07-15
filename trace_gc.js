let k = 0;
let collection = {};

const timer = setInterval(() => {
  k++;
  const key = "globalVar " + k;
  collection[key] = new Array(1000).fill(key);
}, 5);

// setInterval(() => {
//   clearInterval(timer);
//   collection = {};
// }, 5000);
