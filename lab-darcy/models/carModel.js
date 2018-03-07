'use strict';

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  color: String,
});

let Car = mongoose.model('Car', carSchema);
module.exports = Car;