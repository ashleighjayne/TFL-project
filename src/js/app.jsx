'use strict';

let React = require('react'),
    ReactDOM = require('react-dom');

// Import components and classes to be used
let TransportTable = require('./transport-table'),
    TransportFilter = require('./transport-filter'),
    TableUpdate = require('./table-update'),
    DataHandler = require('./data-handler'),
    PollingTimer = require('./polling-timer');

// Create new instance of our classes
let dataHandler = new DataHandler,
    pollingTimer = new PollingTimer;	

/* 
* App
* Main App
*/
class App extends React.Component {
    render() {
        return (
            <div>
                <div className="tfl-loader">
                    <TransportFilter dataHandler={dataHandler}/>
                    <TableUpdate pollingTimer={pollingTimer}/>
                    <TransportTable dataHandler={dataHandler} pollingTimer={pollingTimer}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>,  document.getElementById('app'));
