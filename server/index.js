const express = require('express');
const morgan = require('morgan');

const app = express();

const port = 3000;

app.use(morgan('dev'));

//routes
app.get('/api/images/:product_id', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = {
  app: app
}