const utils = require('../../utils/database/utils.js');
const { db } = require('../index.js');

const getProductDataById = (productId) => {
  let QUERY = `SELECT * FROM products WHERE id = ${productId}`;
  return utils.queryAsync(QUERY);
}

const getImageDataByProdId = (productId) => {
  let QUERY = `SELECT full, small, thumbnail FROM images WHERE product_id = ${productId}`;
  return utils.queryAsync(QUERY);
}

module.exports.getImageById = (productId) => {
  return new Promise((resolve, reject) => {
    let productData = {};
    getProductDataById(productId)
      .then((result) => {
        productData = result[0];
        return getImageDataByProdId(productId);
      })
      .then((results) => {
        let images = [];
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
      })
  });
}