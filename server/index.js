const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const { db } = require('../database/index.js');
const models = require('../database/models');

const app = express();
const port = 7777;

db.connect((err) => {
  if (err) {
    console.log('Unable to connect to database');
    console.log(err);
  } else {
    console.log('Successfully connected to `gallery` database');
  }
});

app.use(compression());
app.use(morgan('dev'));
app.use('/product/:productId', express.static('./public'));

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
    .then((isFavorite) => {
      res.send(isFavorite);
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
