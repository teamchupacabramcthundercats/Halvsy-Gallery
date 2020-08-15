const { db } = require('../index.js');

module.exports.toggleFavorite = (productId) => new Promise((resolve, reject) => {
  const UPDATE_QUERY = `UPDATE products SET isFavorite = '1' WHERE id = "${productId}"`;

  db.query(UPDATE_QUERY, (err) => {
    if (err) {
      console.log(err);
      reject(err);
    } else {
      resolve();
    }
  });
});
