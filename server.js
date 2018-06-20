const express = require('express');
const app = express();
const cors = require('cors');
require('zone.js/dist/zone-node');
const bodyParser = require('body-parser');
const API_URL = 'http://www.cynautix.com/baggee_api/pay2all_api/';
const API_KEY = '225431774997791';
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

app.get('/api/providers', (req, res) => {
  request(API_URL + 'get-provider?_format=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(response.statusCode);
    }
  });
});

app.get('/api/findProvider/:mobileNumber', (req, res) => {
  request('https://api.datayuge.com/v1/lookup/' + req.params.mobileNumber, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(response.statusCode);
    }
  })
})

app.get('/api/getCircle/', (req, res) => {
  request(API_URL + 'get-circle?_format=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(response.statusCode);
    }
  });
});

app.get('/api/getPlans', (req, res) => {
  request('https://joloapi.com/api/findplan.php?userid=rsaini&key=' + API_KEY + '&opt=28&cir=1&typ=TUP&max=10&type=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(response.statusCode);
    }

  });
});

