const express = require('express');

const app = express();

app.use(express.static('client'));
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

const scheduling = require('./client/data/schedule.json');
const places = require('./client/data/places.json');
const pldict = require('./client/data/pl_list.json');

let current = 0;

app.get('/list', function (req, resp) {
  resp.send(scheduling[current]);
});

app.get('/pl_list', function (req, resp) {
  resp.send(pldict[current]);
});

app.get('/places', function (req, resp) {
  resp.send(Object.keys(places));
});

app.post('/switch', function (req, resp) {
  current = req.body.cur;
  resp.send('Day switched');
});

app.post('/add', function (req, resp) {
  const ev = req.body.ev_event;
  const { hr } = req.body;
  const pl = req.body.place;
  scheduling[current][hr] = ev;
  if (!places[pl]) {
    places[pl] = 1;
  } else {
    places[pl] += 1;
  }
  pldict[current][hr] = pl;
  resp.send('Event added');
});

app.post('/delete', function (req, resp) {
  const { hr } = req.body;
  scheduling[current][hr] = '';
  p = pldict[current][hr];
  delete pldict[current][hr];
  if (places[p] === 1) {
    delete places[p];
  } else {
    places[p] -= 1;
  }
  resp.send('Event deleted');
});

module.exports = app;
