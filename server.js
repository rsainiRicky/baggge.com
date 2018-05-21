const express = require('express');
const app = express();
const cors = require('cors');
require('zone.js/dist/zone-node');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
var request = require('request');
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.options('*', function (req, res) {
  res.sendStatus(200);
});
app.use(function (err, req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, PUT, POST, PUT, DELETE, OPTIONS'
  );
  res.header({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Credentials': 'true'
  });
  next();
});
app.listen(8000, () => {
  console.log('Server started!');
});

app.get('/api/cats', (req, res) => {
  request('http://www.cynautix.com/baggee_api/pay2all_api/get-provider?_format=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(response.statusCode);
    }
  });
});
