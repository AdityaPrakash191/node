/*
What is Promise?
1. Readabilty enhancers
2. They can solve the problem of IOC (Inversion of Control)
3. In JS promises are special types of object that get returned immediately once we call them.
4. Promise act as a placeholder for the data which we hope to get back in future.
**********************************************************************************************************************************************
How to create a promise?

 1. Creation of promise is Synchornous in nature.
    Note : Creation only & Promises are native to js.

 2. stages of promise
     pending -> when we create a new promise object. this is the default state, it represents works in progress. 
     fulfilled -> if the operation is completed successfully.
     rejected  -> if operation was not succesful.

 3. new Promise (function(resolve,reject){....})
    NOTE :- resolve and reject are function.

 4. Promise contains 4 things. State & value, onFulfillmenthandler and onRejectionhandler array. These array contains functions and these functions are expected to invoke Once the promise state is resolve or reject.
    Using .then we bind the functions present in the onFullfillmenthandler & onRejectionhandler with promise.
             /\
            /  \
           /    \
          \/    \/ 
    State         Value
    pending         undefined
    resolve(args)   args
    reject(args)    args
**********************************************************************************************************************************************


                      
*/
// Example of promise performing synchronous because of for loop, native javascript code.

function GetRandomInt(val) {
  return Math.floor(Math.random() * val);
}

function CreatePromiseWithLoop() {
  return new Promise(function executor(resolve, reject) {
    for (let i = 0; i < 1000000000; i++) {}
    let num = GetRandomInt(10);
    if (num % 2 == 0) {
      resolve(num);
    } else {
      reject(num);
    }
  });
}

// let p = CreatePromiseWithLoop();
// console.log(p);

// **********************************************************************************************************************************************

// Example of promise performing Asynchronous because of for setTimeout, not native to  javascript code.

function CreatePromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(function executor() {
      let num = GetRandomInt(8);
      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 10000);
  });
}

// let q = CreatePromiseWithTimeout();
// console.log(q);

// **********************************************************************************************************************************************

/* FEW Checkpoints 
1. If resolve and reject is not used and instead we use return from function. then promise stays in pending state and function execution would be stopped. 

2. even after calling resolve and reject , execution of remaining part won't stop if any.

3. If multiple resolve and rejects are used. Only the first one would be considered.
*/
// **********************************************************************************************************************************************

/**
 * How to consume a promise.
 *
 *
 */
function CreatePromiseWithTimeout1() {
  return new Promise(function executor(resolve, reject) {
    console.log("Entering the executor callback in the promise constructor");
    setTimeout(function executor() {
      let num = GetRandomInt(8);
      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 10000);
    console.log("Exiting the executor callback from the promise constructor");
  });
}
console.log("Starting...");
let a = CreatePromiseWithTimeout1();
console.log("we are now waiting for the promise object to complete");
console.log("Currently my promise object is like ...", a);

console.log("Going to register my first set of handlers");
a.then(
  function fulFillHandler1(value) {
    console.log(`Inside the fulFillHandler 1 with value : ${value}`);
    console.log("promise after fulFillment is", a);
  },
  function rejectionHandler1(value) {
    console.log(`Inside the rejectionHandler 1 with value : ${value}`);
    console.log("promise after rejection is", a);
  }
);

console.log("Going to register my second set of handlers");
a.then(
  function fulFillHandler2(value) {
    console.log(`Inside the fulFillHandler 2 with value : ${value}`);
    console.log("promise after fulFillment is", a);
  },
  function rejectionHandler2(value) {
    console.log(`Inside the rejectionHandler 2 with value : ${value}`);
    console.log("promise after rejection is", a);
  }
);
console.log("Ending....");

/*
 In this .then section first we are registering the fulFillHandler inside the OnFulFulliment array and rejectionHandler inside OnRejection Array,
 till the promise is in pending state, this work goes on.
 
 If we use multiple .then, multiple registration of functions inside handler array will happen simultaneously.

 NOTE : .then is only used for registration process after that flow of execution continues. When the promise object resolves or reject, it will call
          the required functions registered inside the handler array
*/
// **********************************************************************************************************************************************

// SetTimeout & SetInterval returns ----------> integer in browser
//                                  ----------> object in node.
