function download(url) {
  console.log("Started downloading the data from ", url);
  return new Promise(function dn(resolve, reject) {
    setTimeout(function processDownload() {
      console.log("Downloaded the content");
      resolve("ABCDEF");
    }, 5000);
  });
}

function write(data) {
  console.log("Starting saving the data");
  return new Promise(function store(resolve, reject) {
    setTimeout(function executor() {
      let file = "file.txt";
      console.log(`${data} store at ${file}`);
      resolve(file);
    }, 3000);
  });
}

function upload(file, url) {
  console.log("Started Uploading the file ", file, " at", url);
  return new Promise(function processUpload(resolve, reject) {
    setTimeout(function executor() {
      console.log(`file uploaded at ${url}`);
      resolve("Success");
    }, 2000);
  });
}

function doAfterReceiving(value) {
  let future = iter.next(value);
  console.log("future is ", future);
  if (future.done) return;
  future.value.then(doAfterReceiving);
}

function* steps() {
  let downloadedData = yield download("www.xyz.com");
  console.log("data downloaded is ", downloadedData);
  let fileWritten = yield write(downloadedData);
  console.log("file written is ", fileWritten);
  let uploadedFile = yield upload(fileWritten, "www.google.com");
  console.log("uploaded response is ", uploadedFile);
}

let iter = steps();
let future = iter.next();
future.value.then(doAfterReceiving);
