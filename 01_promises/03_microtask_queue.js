/*  MICROTASK QUEUE 
    At any point of time, if event loop has a choice to pick from microtask queue or callback queue. then it always gave preference to microtask queue.
*/
function createPromise() {
  return new Promise(function executor(resolve, reject) {
    console.log("Resolving the promise");
    resolve("Done");
  });
}

setTimeout(function process() {
  console.log("Timer Completed");
}, 0);

console.log("Starting....");
let p = createPromise();
// this program will demonstrate that fulfillhandler functions are stored in microtask queue and get priority over callback queue

p.then(
  function fulfillHandler1(value) {
    console.log();
    console.log(" Microtask queue execution started ");
    console.log();

    console.log("we fulfilled 1 with value", value);
  },
  function rejectHandler() {}
);
p.then(
  function fulfillHandler2(value) {
    console.log("we fulfilled 2 with value", value);
  },
  function rejectHandler() {}
);

p.then(
  function fulfillHandler3(value) {
    console.log("we fulfilled 3 with value", value);
    console.log();

    console.log("Microtask queue exection ended");
    console.log();
  },
  function rejectHandler() {}
);

for (let i = 0; i < 1000000000; i++) {}

console.log("Ending....");
