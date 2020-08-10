const mysql = require('mysql');

module.exports.db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'student',
  password: 'student',
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
