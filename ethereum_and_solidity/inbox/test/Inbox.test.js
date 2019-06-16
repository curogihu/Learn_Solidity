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

beforeEach(() => {
    // Get a list of all accounts
    web3.eth.getAccounts()
        .then(fetchedAccounts => {
            console.log(fetchedAccounts);
        });

    // Use one of those accounts to deploy the contract

});

describe('Inbox', () => {
    it('deploys a contract', () => {})
});

