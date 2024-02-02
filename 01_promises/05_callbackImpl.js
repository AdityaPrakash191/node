// function download(url, cb) {
//   console.log("Started downloading data");
//   setTimeout(function dn() {
//     let data = "Abcdef";
//     console.log("Download Completed");
//     cb(data);
//   }, 3000);
// }
// function store(data, cb) {
//   console.log("Started Saving the data");
//   setTimeout(function st() {
//     let newFile = "file.txt";
//     console.log("Data Saved");
//     cb(newFile);
//   }, 5000);
// }

// function upload(url, file, cb) {
//   console.log("Started uploading", file, "on", url);
//   setTimeout(function up() {
//     console.log("upload completed");
//     const response = "Success";
//     cb(response);
//   }, 2000);
// }

// download("www.xyz.com", function processDownload(content) {
//   console.log("We are now going to process the downloaded data");
//   store(content, function processWrite() {
//     console.log("We have downloaded and written the file, now will upload");
//     upload("www.upload.com", filename, function processUpload(response) {
//       console.log("We have uploaded with ", response);
//     });
//   });
// });
/*
 */

function download(url) {
  console.log("Started downloading the data");
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

let p = download("www.xyz.com");
p.then(function processDownload(content) {
  console.log("We are now going to process the downloaded data");
  return write(content);
})
  .then(function processStore(file) {
    console.log("We have downloaded and written the file, now will upload");
    return upload(file, "www.abc.com");
  })
  .then(function processUpload(value) {
    console.log("we have uploaded with ", value);
  });
