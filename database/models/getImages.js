/* eslint-disable no-plusplus */
const { db } = require('../index.js');

const getProductDataById = (productId) => {
  const QUERY = `SELECT * FROM products WHERE id = ${productId}`;
  return db.queryAsync(QUERY);
};

const getImageDataByProdId = (productId) => {
  const QUERY = `SELECT full, small, thumbnail FROM images WHERE productId = ${productId}`;
  return db.queryAsync(QUERY);
};

module.exports.getImageById = (productId) => new Promise((resolve, reject) => {
  let productData = {};
  getProductDataById(productId)
    .then((result) => {
      [productData] = result;
      return getImageDataByProdId(productId);
    })
    .then((results) => {
      const images = [];
      for (let i = 0; i < results.length; i++) {
        images.push(results[i]);
      }
      productData.images = images;
    })
    .then(() => {
      resolve(productData);
    })
    .catch((err) => {
      reject(err);
    });
});
