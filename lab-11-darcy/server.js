'use strict';

const express = require('express');

const Car = require('./models/car.js');
const carRouter = require('./routes/car.js');
// const cars = require('./lib/storage.js');
const app = express();

app.use('/api/cars', carRouter);

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('http://localhost: ' + PORT)
});