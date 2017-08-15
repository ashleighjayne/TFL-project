'use strict';

let React = require('react');
let ReactDOM = require('react-dom');

let TransportTable = require('./TransportTable');
let TransportFilter = require('./TransportFilter');
let TableUpdate = require('./TableUpdate');
let DataHandler = require('./DataHandler');
let PollingTimer = require('./PollingTimer');



let dataHandler = new DataHandler;
let pollingTimer = new PollingTimer;	


class App extends React.Component {
    render() {
        return (
            <div>
                <div className="tfl-loader">
                    <p className="tfl-instructions">Select services to filter:</p>

                    <TransportFilter dataHandler={dataHandler}/>
                    <TableUpdate pollingTimer={pollingTimer}/>
                    <TransportTable dataHandler={dataHandler} pollingTimer={pollingTimer}/>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App/>,  document.getElementById("app"));
