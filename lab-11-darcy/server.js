'use strict';

const express = require('express');

const Car = require('./models/car.js');
const carRouter = require('./routes/car.js');
const storage = require('./lib/storage.js');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/test");
storage.seed();

const app = express();

app.use(bodyParser.json());
app.use('/api/cars', carRouter);


let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('http://localhost: ' + PORT)
});