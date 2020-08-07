const { db } = require('./init.js');
const path = require('path');
const faker = require('faker');
const utils = require('../utils/seedUtils.js');

db.connect();

const generateProductData = () => {
  let product = { is_favorite: false };
  let images = [];
  let numberOfImages = Math.floor(Math.random() * 15 + 1);
  let imgIds = utils.generateImageIds();

  product.name = faker.commerce.product();

  console.log(`numberOfImages: ${numberOfImages}`)
  
  for (let i = 0; i < numberOfImages; i++) {
    let img = {};
    let idIndex = Math.floor(Math.random() * 100);
    let imgId = imgIds[idIndex];
    img.full = utils.fullImgPath(imgId);
    img.small = utils.smallImgPath(imgId);
    img.thumbnail = utils.thumbImgPath(imgId);
    images.push(img);
  }

  product.images = images;

  console.log(JSON.stringify(product));
}

generateProductData();

db.end();