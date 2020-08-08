const express = require('express');
const morgan = require('morgan');
const { db } = require('../database/index.js');
const models = require('../database/models');

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

  models.getImageById(product_id) 
    .then((productData) => {
      res.send(productData);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = {
  app: app
}