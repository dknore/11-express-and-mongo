'use strict';

const express = require('express');
const router = express.Router();

const Car = require('../models/car.js');


router.get('/car', (req, res) => {
    console.log("inside app.get");
    let car = new Car({make: "Audi", model: "Q7", color: "Silver"});
    res.send(car);
    // car.save().then((savedCar) => {

    // }).catch((err) => {
    //     console.error(err);
    //     res.send(err);
    // })
});

module.exports = router;