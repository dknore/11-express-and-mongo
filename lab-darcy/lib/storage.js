'use strict';

const Car = require('./models/carModel.js');

function seed(storage) {
    return storage.removeAll()
    .then(() => {
      return Promise.all([
        storage.save(new Car({make: "Audi", model: "Q7", color: "Silver"})),
        storage.save(new Car({make: "BMW", model: "X7", color: "Black"})),
        storage.save(new Car({make: "Porsche", model: "Cayenne", color: "Red"})),
      ])
    });
  }

  module.exports = {seed};