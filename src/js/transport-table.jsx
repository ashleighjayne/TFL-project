let React = require('react');

/* 
* Transport Table
* Displays data re service line statuses
*/
class TransportTable extends React.Component {
    /** 
    * @param {object} props - Contains pollingTimer and data handler Objects
    */
    constructor(props) {
        super(props);

        this.dataHandler = props.dataHandler;
        this.pollingTimer = props.pollingTimer;

        this.state = {
            data: {}
        };

        this.listenForPollingInterval();
    }

    listenForPollingInterval() {
        document.addEventListener('newDataRequested', () => {
            this.loadData();
        });
    }

    /** 
    * Loads data and sets as this.state - this will cause re-render of component
    */
    loadData() {
        let response = this.dataHandler.getLineStatus();

        response.then((data) => {
            this.setState({
                data: data
            });
        });
    }

    componentWillMount() {
        this.loadData();
        this.pollingTimer.setInterval();
    }

    render() {
        let tableRows = [];

        if (this.state.data.length) {
            this.state.data.forEach((line, index) => {
                tableRows.push(<tr key={index} className="tfl-table--row">
                        <td className="tfl-table--cell mode">{line.modeName}</td>
                        <td className="tfl-table--cell name">{line.name}</td>
                        <td className="tfl-table--cell status">{line.lineStatuses[0].statusSeverityDescription}</td>
                        <td className="tfl-table--cell disruptions">{line.disruptions.length}</td>
                    </tr>);
            });
        }
        
        return (
            <table className="tfl-table">
                <thead className="tfl-table--head">
                    <tr className="tfl-table--row">
                        <th className="tfl-table--header-cell mode">Service</th>
                        <th className="tfl-table--header-cell name">Line</th>
                        <th className="tfl-table--header-cell status">Status</th>
                        <th className="tfl-table--header-cell disruptions">Disruptions</th>
                    </tr>
                </thead>
                <tbody className="tfl-table--body">
                    {tableRows}
                </tbody>
            </table>
        );
    }
};

module.exports = TransportTable;
