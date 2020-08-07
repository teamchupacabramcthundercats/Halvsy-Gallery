const fs = require('fs');
const axios = require('axios');
const path = require('path');

const PATH = path.join(__dirname);
const url = 'https://loremflickr.com/800/600/lego'

let padNum = (number, size) => {
  let result = "000" + number;
  return result.substr(-size);
}

let getImage = (fileName) => {
  let WRITE_PATH = path.join(PATH, "images", fileName + ".jpg");
  axios.get(url, {responseType: "stream"})
  .then((response) => {
    stream = response.data;
    return stream.pipe(fs.createWriteStream(WRITE_PATH));
  })
  .catch((err) => console.log(err))
};

let downloadAHundredImages = () => {
  
  let timer = 0;

  for (let counter = 1; counter < 101; counter++) {
    let fileName = padNum(counter, 3);
    setTimeout(() => getImage(fileName), timer);
    timer += 2000;
  }
}

downloadAHundredImages();