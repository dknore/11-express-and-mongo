'use strict';

const Car = require('../models/car.js');

function seed() {
  return removeAll().then(() => {
      return Promise.all([
        save(new Car({ make: "Audi", model: "Q7", color: "Silver" })),
        save(new Car({ make: "BMW", model: "X7", color: "Black" })),
        save(new Car({ make: "Porsche", model: "Cayenne", color: "Red" })),
      ]);
    })
}

function save(make, model, color) {
  return new Promise((resolve, reject) => {
    let car = new Car({
      make: make,
      model: model,
      color: color,
    });
    car.save((err, savedCar) => {
      resolve(savedCar);
    });
  });
}

function getOne(id) {
  console.log("inside getOne");
  return new Promise((resolve, reject) => {
    Car.findOne({ _id: id }, (err, vehicle) => {
      resolve(vehicle);
    })
  })
}

function getAll() {
  console.log("inside getAll");
  return new Promise((resolve, reject) => {
    Car.find((err, vehicles) => {
      resolve(vehicles);
    });
  });
}

function update(id) {
  console.log("inside update");
  return new Promise((resolve, reject) => {
    Car.update({ _id: id }, (err, vehicle) => {
      resolve(vehicle);
    })
  })
}

function removeOne(id) {
  console.log("inside removeOne");
  return new Promise((resolve, reject) => {
    Car.remove((err, vehicle) => {
      resolve(vehicle);
    })
  })
}

function removeAll() {
  console.log("inside removeAll")
  return new Promise((resolve, reject) => {
    Car.remove((err, vehicles) => {
      resolve(vehicles);
    })
  });
}

module.exports = { seed, save, getOne, getAll, update, removeOne, removeAll };