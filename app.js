const express = require('express');
const app = express();

app.use(express.static('client'));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

let scheduling = require('./client/data/schedule.json');
let places = require('./client/data/places.json');
let pl_dict = require('./client/data/pl_list.json');
let current = 0;

app.get('/list', function (req, resp){
    resp.send(scheduling[current]);
});

app.get('/pl_list', function (req, resp){
    resp.send(pl_dict[current]);
})

app.get('/places', function (req, resp){
    resp.send(Object.keys(places));
});

app.post('/switch', function (req, resp){
    current = req.body.cur;
    resp.send("Day switched")
});

app.post('/add', function (req, resp){
    const ev = req.body.ev_event;
    const hr = req.body.hr;
    const pl = req.body.place;
    scheduling[current][hr] = ev;
    if(!places[pl]){
        places[pl] = 1;
    }
    else{
        places[pl] += 1;
    }
    pl_dict[current][hr] = pl;
    resp.send("Event added");
});

app.post('/delete', function (req, resp){
    const hr = req.body.hr;
    scheduling[current][hr] = "";
    p = pl_dict[current][hr];
    delete pl_dict[current][hr];
    if(places[p]==1){
        delete places[p];
    }
    else{
        places[p] -= 1;
    }
    resp.send("Event deleted");
});

module.exports = app;