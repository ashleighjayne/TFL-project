let chai = require('chai'),
    mocha = require('mocha'),
    enzyme = require('enzyme'),
    sinon = require('sinon'),
    render = require('react-test-renderer');

let expect = chai.expect,
    assert = chai.assert,
    shallow = enzyme.shallow,
    describe = mocha.describe,
    it = mocha.it,
    before = mocha.before,
    after = mocha.after,
    stub = sinon.stub,
    spy = sinon.spy;


let DataHandler = require('../data-handler');

describe('DataHandler ', () => {

    //before each - create new instance of data handler 

    //after each - clear instance

    //describe - data handler - tests constructor
    // Should create an object

    //describe - get all modes function
    // Should call getJson
    // Should return a promise object

    //describe - get line status function
    // Should call getJson
    // Should return a promise object

    //describe - get json function
    // Need to mock endpoint and request
    // Test for success and failure
    // Should return a promise object
});
