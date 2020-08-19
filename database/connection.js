const mysql = require('mysql');

module.exports.db = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: 'password',
  database: 'gallery',
});

module.exports.db.queryAsync = (QUERY) => new Promise((resolve, reject) => {
  module.exports.db.query(QUERY, (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
