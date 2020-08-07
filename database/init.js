const mysql = require('mysql');

module.exports.db = mysql.createConnection({
  host: `localhost`,
  user: `student`,
  password: `student`,
  database: `gallery`
});