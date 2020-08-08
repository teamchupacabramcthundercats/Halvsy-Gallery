const mysql = require('mysql');
const utils = require('../../utils/database/utils.js');

const getProductDataById = (productId) => {
  let QUERY = `SELECT name, is_favorite FROM products WHERE id = ${productId}`;
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
        result = result[0];
        productData.name = result.name;
        productData.is_favorite = result.is_favorite;
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