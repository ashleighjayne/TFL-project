'use strict';

let React = require('react'),
    ReactDOM = require('react-dom');

let TransportTable = require('./transport-table'),
    TransportFilter = require('./transport-filter'),
    TableUpdate = require('./table-update'),
    DataHandler = require('./data-handler'),
    PollingTimer = require('./polling-timer');

let dataHandler = new DataHandler,
    pollingTimer = new PollingTimer;	


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
