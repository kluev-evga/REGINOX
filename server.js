const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./api');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.use('/', api);