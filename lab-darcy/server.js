'use strict';

const express = require('express');

const Car = require('./models/carModel.js');
// const cars = require('./lib/storage.js');
const app = express();

// Routes Start
app.get('/car', (req, res) => {
    console.log("inside app.get");
    let car = new Car({make: "Audi", model: "Q7", color: "Silver"});
    res.send(car);
    // car.save().then((savedCar) => {

    // }).catch((err) => {
    //     console.error(err);
    //     res.send(err);
    // })
});

// Routes End

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('http://localhost: ' + PORT)
});