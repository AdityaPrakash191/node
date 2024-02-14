function download(url) {
  console.log("Started downloading the data from ", url);
  return new Promise(function dn(resolve, reject) {
    setTimeout(function processDownload() {
      console.log("Downloaded the content");
      reject("ABCDEF");
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

download("www.xyz.com")
  .then(function exec(value) {
    console.log("error", value);
    return write(value);
  })
  .then(function exec(value) {
    console.log("error", value);
    return upload(value);
  })
  .then(function exec(value) {
    console.log("error", value);
  })
  .catch(function exec(value) {
    console.log("error detected", value);
  })
  .finally(function exec() {
    console.log("It will always be executed");
  });
