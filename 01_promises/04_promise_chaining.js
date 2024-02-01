/*
    1.> .then() function  returns a new promise object.
    2.> It immediately returns a new promise object.
    3.> using this promise object, we can chain a bunch of .then().

*/
/********************************************************************************************************************************************************************* */

// Example 1

function download(url) {
  console.log("Started downloading content from the url ", url);
  return new Promise(function exec(resolve, reject) {
    setTimeout(function process() {
      console.log("Completed downloading data in 5s");
      const content = "ABCDEF";
      resolve(content);
    }, 5000);
  });
}

// x = download("www.xyz.com");
//
// x.then(
//   function fulfillHandler(value) {
//     console.log("Content downloaded is 1 ", value);
//     return "New promsie string";
//   },
//   function rejectionHandler(value) {
//     console.log("rejected with value ", value);
//   }
// ).then(function fullfillHandler(value) {
//   console.log("Value from chained then promise ", value);
// });

/********************************************************************************************************************************************************************* */

// Example 2
Promise.resolve("foo")
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(
    (string) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          string += "bar";
          resolve(string);
        }, 10000);
      })
  )
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then((string) => {
    setTimeout(() => {
      string += "baz";
      console.log(string); // foobarbaz
    }, 1);
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.
  .then((string) => {
    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string); // foobar
  });

// Logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
