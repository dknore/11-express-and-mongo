'use strict';
// - write a test to ensure that your api returns a status code of 404 for routes that have not been registered
// - write tests to ensure the /api/simple-resource-name endpoint responds as described for each condition below:
//     * GET: test 404, it should respond with 'not found' for valid requests made with an id that was not found
//     * GET: test 400, it should respond with 'bad request' if no id was provided in the request
//     * GET: test 200, it should contain a response body for a request made with a valid id
//     * POST: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
//     * POST: test 200, it should respond with the body content for a post request with a valid body

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test");

const Car = require('../models/car')

describe("MongoDB", () => {
    test("can create a car", (done) => {
        let car = new Car({make: "Audi", model: "Q7", color: "Silver"});
        car.save().then((savedCar) => {
            console.log("saved:", savedCar)
            done()
        })
    })
    
    test("Can find cars", (done) => {
        Car.find((err, vehicles) => {
            console.log("inside car find", vehicles);
            done()
        });
    });
});
