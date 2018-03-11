'use strict';

const express = require('express');
const router = express.Router();

const Car = require('../models/car.js');
const storage = require('../lib/storage.js');


router.get('/', (req, res) => {
// Get One
    if (req.query.id) {
        storage.getOne(req.query.id).then((results) => {
            res.send(results);
        })
// Get All
    } else {
        storage.getAll().then((results) => {
            res.send(results);
        })
    }
});

router.put('/', (req, res) => {
// Update car make, model, or color
    storage.getOne(req.query.id)
        .then((results) => {
            if (req.body.make) {
                results.make = req.body.make;
            }
            if (req.body.model) {
                results.model = req.body.model;
            }
            if (req.body.color) {
                results.color = req.body.color;
            }
            results.save((err, savedCar) => {
                res.send(savedCar);
            });
        })
})

router.post('/', (req, res) => {
    // if (req.body.make === null || req.body.model === null || req.body.color === null) {
    //     res.status(400);
    // } else {

// Add new Car
    let car = new Car({
        make: req.body.make,
        model: req.body.model,
        color: req.body.color
    });
    car.save((err, savedCar) => {
        res.send(savedCar);
    });
});
// });

router.delete('/', (req, res) => {
// Delete one car
    if (req.query.id) {
        storage.remove(req.query.id).then((results) => {
            res.status(204).send();
        })
// delete all cars
    } else {
        storage.remove().then((results) => {
            res.status(204).send();
        })
    }
})


module.exports = router;