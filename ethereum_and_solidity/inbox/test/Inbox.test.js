const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// Web3 versioning
// v0.x.x "Primitive" interface - only callbacks for async code
// v1.x.x Support for promises + async / await

const web3 = new Web3(ganache.provider());

// Mocha Functions
// it           - Run a test and make an assertion
// describe     - Groups together 'it' function
// beforeEach   - Execute some general setup code

// The car is used for learning how to use test with Mocha
class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}

let car;

// Extract common initization process
beforeEach(() => {
    car = new Car();
});

// Two test cases for Car class
describe('Car', () => {
    it('can park', () => {
        // const car = new Car();
        assert.equal(car.park(), 'stopped');
    });


    it('can drive', () => {
        // const car = new Car();
        assert.equal(car.drive(), 'vroom');
    });
});