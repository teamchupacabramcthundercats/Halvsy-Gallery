const { db } = require('../../database/index.js');
const faker = require('faker');

db.connect();

const utils = require('./utils.js');

const generateProductData = () => {
  let product = { is_favorite: 0 };
  let images = [];
  let numberOfImages = Math.floor(Math.random() * 15 + 1);
  let imgIds = utils.generateImageIds();
  
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
  product.name = faker.commerce.product();

  return product;
}

const addProductToDb = (product) => {
  let images = product.images;
  delete product.images;
  let promises = [];

  let PRODUCT_QUERY = `INSERT INTO products (name, is_favorite) 
  VALUES ("${product.name}", ${product.is_favorite})`;
  return db.queryAsync(PRODUCT_QUERY)
    .then((results) => {
      let product_id = results.insertId;
      
      for (let i = 0; i < images.length; i++) {
        let image = images[i];
        let IMAGE_QUERY = `INSERT INTO images (full, small, thumbnail, product_id)
        VALUES ("${image.full}", "${image.small}", "${image.thumbnail}", ${product_id})`
        promises.push(db.queryAsync(IMAGE_QUERY));
      }
    })
    .then(() => Promise.all(promises))
    .catch(console.log);
}

const seedDb = () => {
  let promises = [];

  for (let i = 0; i < 100; i++) {
    promises.push(addProductToDb(generateProductData()));
  }

  Promise.all(promises)
    .then(() => {
      db.end();
      console.log("Seed complete");
    })
}

seedDb();