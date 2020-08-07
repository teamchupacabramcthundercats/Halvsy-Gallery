const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const DIR = path.join(__dirname, 'images');

const padNum = (number, size) => {
  let result = "000" + number;
  return result.substr(-size);
}

const getFileNames = (mod = '') => {
  let results = [];
  for (let counter = 1; counter <= 100; counter++) {
    results.push(padNum(counter, 3) + mod + '.jpg');
  }
  return results;
};

const sourceFileNames = getFileNames();

const smallFileNames = getFileNames('-sm');

//Resizes images to 75x75
const generateThumbnails = (fileNames) => {
  let thumbFileNames = getFileNames('-tn');
  for (let i = 0; i < fileNames.length; i++) {
    let output = path.join(DIR, `thumbnails`, thumbFileNames[i]);
    let input = path.join(DIR, fileNames[i]);
    
    sharp(input)
      .resize(75, 75)
      .toFile(output, (err) => {
        if (err) {
          console.log(err);
        }
      });
  }
}

generateThumbnails(sourceFileNames);

//Resizes images to 300x300
const generateSmallImages = (fileNames) => {
  let smallFileNames = getFileNames('-sm');
  for (let i = 0; i < fileNames.length; i++) {
    let output = path.join(DIR, `small`, smallFileNames[i]);
    let input = path.join(DIR, fileNames[i]);
    
    sharp(input)
      .resize(300, 300)
      .toFile(output, (err) => {
        if (err) {
          console.log(err);
        }
      });
  }
}

generateSmallImages(sourceFileNames);