const { db } = require('../index.js');

module.exports.toggleFavorite = (productId) => new Promise((resolve, reject) => {
  const FAVORITE = `UPDATE products SET isFavorite = '1' WHERE id = "${productId}"`;
  const UNFAVORITE = `UPDATE products SET isFavorite = '0' WHERE id = "${productId}"`;
  const GET_FAVORITE = `SELECT isFavorite FROM products WHERE id = "${productId}"`;

  return db.queryAsync(GET_FAVORITE)
    .then(([{ isFavorite }]) => {
      if (isFavorite) {
        db.queryAsync(UNFAVORITE)
          .then(() => {
            resolve({ isFavorite: 0 });
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        db.queryAsync(FAVORITE)
          .then(() => {
            resolve({ isFavorite: 1 });
          })
          .catch((err) => {
            reject(err);
          });
      }
    })
    .catch((err) => {
      reject(err);
    });
});
