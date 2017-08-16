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


let TransportFilter = require('../transport-filter');

describe('TransportFilter ', () => {
    
    //before each - create new instance of data handler
    //Need to mock the dom 

    //after each - clear instance/dom

    //describe - Constructor
    // Should create an object

    //describe - get valid modes function
    // Should filter array of valid modes - check success and failure
    // Should return array

    //describe - component will mount function
    // Should get data from dataHandler object - need to mock promise/response
    // Should set state on component

    //describe - Render
    // Should show DOM manipulation

});
