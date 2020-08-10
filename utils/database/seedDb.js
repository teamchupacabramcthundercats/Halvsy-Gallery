/* eslint-disable no-plusplus */
// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const { db } = require('../../database/index.js');

db.connect();

const utils = require('./utils.js');

const generateProductData = () => {
  const product = { isFavorite: 0 };
  const images = [];
  const numberOfImages = Math.floor(Math.random() * 15 + 1);
  const imgIds = utils.generateImageIds();

  for (let i = 0; i < numberOfImages; i++) {
    const img = {};
    const idIndex = Math.floor(Math.random() * 100);
    const imgId = imgIds[idIndex];
    img.full = utils.fullImgPath(imgId);
    img.small = utils.smallImgPath(imgId);
    img.thumbnail = utils.thumbImgPath(imgId);
    images.push(img);
  }

  product.images = images;
  product.name = faker.commerce.product();

  return product;
};

const addProductToDb = (product) => {
  const { images } = product;
  // eslint-disable-next-line no-param-reassign
  delete product.images;
  const promises = [];

  const PRODUCT_QUERY = `INSERT INTO products (name, isFavorite) 
  VALUES ("${product.name}", ${product.isFavorite})`;
  return db.queryAsync(PRODUCT_QUERY)
    .then((results) => {
      const productId = results.insertId;

      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const IMAGE_QUERY = `INSERT INTO images (full, small, thumbnail, productId)
        VALUES ("${image.full}", "${image.small}", "${image.thumbnail}", ${productId})`;
        promises.push(db.queryAsync(IMAGE_QUERY));
      }
    })
    .then(() => Promise.all(promises))
    .catch(console.log);
};

const seedDb = () => {
  const promises = [];

  for (let i = 0; i < 100; i++) {
    promises.push(addProductToDb(generateProductData()));
  }

  Promise.all(promises)
    .then(() => {
      db.end();
      console.log('Seed complete');
    });
};

seedDb();
