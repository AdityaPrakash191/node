/* What is biggest issue with callback?
 Ans 1 :- Inversion of control --> here we pass the control of callback func to HOF,  and we dont have any control on how they are using my callback,
             if someone change the desired operation then we wont be able to do anything. 
     2 :- Callback hell --> Readability problem 
*/

// Async behavior with callbacks.

function timeConsumingByLoop() {
  console.log("Loops Starts");
  for (let i = 0; i < 10000000000; i++) {}
  console.log("loop ends");
}

function timeConsumingByRuntimeFeature0() {
  console.log("Timer 0 Starts");
  setTimeout(function exec() {
    console.log("Timer 0");
  }, 5000);
  console.log("Timer 0 Closed");
}
function timeConsumingByRuntimeFeature1() {
  console.log("Timer 1 Starts");
  setTimeout(function exec() {
    console.log("Timer 1");
  }, 2000);
  console.log("Timer 1 Closed");
}
function timeConsumingByRuntimeFeature3() {
  console.log("Timer 3 Starts");
  setTimeout(function exec() {
    console.log("Timer 3");
  }, 0);
  console.log("Timer 3 Closed");
}
function timeConsumingByRuntimeFeature2() {
  console.log("Timer 2 Starts");
  setTimeout(function exec() {
    console.log("Timer 2");
    for (let i = 0; i < 10000000000; i++) {}
    console.log("Timer 2 Ends");
  }, 0);
  console.log("Timer 2 Closed");
}

console.log("Program Starts");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByRuntimeFeature3();
console.log("program ends");

// Note calling console.log in node environment would call process.stdout.ft
