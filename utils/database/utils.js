const path = require('path');
const { db } = require('../../database/index.js');

const IMG_PATH = 'https://fec-gallery.s3-us-west-2.amazonaws.com/';

module.exports.queryAsync = (QUERY) => {
  return new Promise((resolve, reject) => {
    db.query(QUERY, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  });
};

module.exports.padNum = (number, size) => {
  let result = "000" + number;
  return result.substr(-size);
}

module.exports.generateImageIds = () => {
  let imageIds = [];

  for (let i = 1; i <= 100; i++) {
    imageIds.push(module.exports.padNum(i, 3));
  }
  return imageIds;
}

module.exports.fullImgPath = (imgId) => {
  return path.join(IMG_PATH, imgId + '.jpg');
}

module.exports.smallImgPath = (imgId) => {
  return path.join(IMG_PATH, `small`, imgId + '-sm.jpg');
}

module.exports.thumbImgPath = (imgId) => {
  return path.join(IMG_PATH, `thumbnail`, imgId + '-tn.jpg');
}