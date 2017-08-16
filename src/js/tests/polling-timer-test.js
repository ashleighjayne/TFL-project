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


let PollingTimer = require('../polling-timer');

describe('PollingTimer', () => {
        
    //before each - create new instance of data handler

    //after each - clear instance

    //describe - set interval function
    // Need to mock timer with sinon
    // Should create interval
    // Should call dispatch event every 3 minutes

    //describe - clear interval function
    // Need to mock timer again
    // Should clear interval
});
