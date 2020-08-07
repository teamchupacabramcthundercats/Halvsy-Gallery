const express = require('express');
const morgan = require('morgan');

const app = express();

const port = 3000;

app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});