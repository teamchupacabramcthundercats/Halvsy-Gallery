const express = require('express');
const morgan = require('morgan');
const { db, models } = require('../database/index.js');

const app = express();
const port = 3000;

db.connect((err) => {
  if (err) {
    console.log("Unable to connect to database");
  } else {
    console.log("Successfully connected to `gallery` database");
  }
});

app.use(morgan('dev'));

//routes
app.get('/api/images/:product_id', (req, res) => {
  let { product_id } = req.params;
  console.log(`product_id: ${product_id}`);
  models.getImageById(product_id) 
    .then((productData) => {
      res.send(productData);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = {
  app: app
}