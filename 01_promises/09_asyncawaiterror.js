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
      reject(file);
    }, 7000);
  });
}

function upload(file, url) {
  console.log("Started Uploading the file ", file, " at", url);
  return new Promise(function processUpload(resolve, reject) {
    setTimeout(function executor() {
      console.log(`file uploaded at ${url}`);
      resolve("Success");
    }, 5000);
  });
}

async function steps() {
  try {
    let downloadedData = await download("www.xyz.com");
    console.log("data downloaded is ", downloadedData);
    let fileWritten = await write(downloadedData);
    console.log("file written is ", fileWritten);
    let uploadedFile = await upload(fileWritten, "www.google.com");
    console.log("uploaded response is ", uploadedFile);
  } catch (err) {
    console.log("Error is handled", err);
  }
}

steps();
