let chai = require('chai'),
    mocha = require('mocha'),
    enzyme = require('enzyme'),
    sinon = require('sinon'),
    render = require('react-test-renderer'),
    React = require('react'),
    ReactDOM = require('react-dom');

let expect = chai.expect,
    assert = chai.assert,
    shallow = enzyme.shallow,
    describe = mocha.describe,
    it = mocha.it,
    before = mocha.before,
    after = mocha.after,
    stub = sinon.stub,
    spy = sinon.spy;


// let App = require('../app');

describe('<App />', () => {

    //before each - create new instance of data handler
    // Need to mock the dom 

    //after each - clear instance/dom

    //describe - Render
    // Should show DOM manipulation

});
