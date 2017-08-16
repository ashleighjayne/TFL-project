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


let TableUpdate = require('../table-update');

describe('TableUpdate ', () => {
    
    //before each - create new instance of data handler
    //Need to mock the dom 

    //after each - clear instance/dom

    //describe - Constructor
    // Should create an object

    //describe - set event listeners function
    // Should create event listeners for custom even and click
    // Will need to mock dom element and event
    // Should call correct functions for each event

    //describe - set time function
    // Should create new date object with current time in correct format
    // Should set state

    //describe - component will mount function
    // Should call this.setTime()

    //describe - component did mount function
    // Should call this.setEventListeners()

    //describe - Render
    // Should show DOM manipulation

});
