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


//let TransportTable = require('../transport-table');

describe('<TransportTable/>', () => {
    
    //before each - create new instance of data handler
    //Need to mock the dom 

    //after each - clear instance/dom

    //describe - Constructor
    // Should create an object

    //describe - listen for polling interval function
    // Should create event listener
    // Should register event fired
    // Should call this.load data

    //describe - load data function
    // Should call get line status on data handler object
    // Need to mock promise/response
    // Should set state

    //describe - component will mount function
    // Should call load data function
    // Should call set interval on polling timer object

    //describe - Render
    // Should show DOM manipulation

});
