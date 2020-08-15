const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const morgan = require('morgan');
const { db } = require('../database/index.js');
const models = require('../database/models');

const app = express();
const port = 3000;

db.connect((err) => {
  if (err) {
    console.log('Unable to connect to database');
  } else {
    console.log('Successfully connected to `gallery` database');
  }
});

app.use(morgan('dev'));
app.use(express.static('./public'));

// routes
app.get('/api/images/:productId', (req, res) => {
  const { productId } = req.params;

  models.getImageById(productId)
    .then((productData) => {
      res.send(productData);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

app.patch('/api/favorite/:productId', (req, res) => {
  const { productId } = req.params;

  models.toggleFavorite(productId)
    .then(() => models.getImageById(productId))
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
  app,
};
