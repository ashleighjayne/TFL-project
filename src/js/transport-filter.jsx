let React = require('react');

/** 
* Transport Filter
* Filter for transport line status table
*/
class TransportFilter extends React.Component {
    /** 
    * @param {object} props - dataHandler Object
    */
    constructor(props) {
        super(props);

        this.dataHandler = props.dataHandler;

        this.state = {
            modes: [],
            selected: []
        };
    }

    /** 
    * Filter valid modes of transport to receive only TFL services
    * @param {objet} data - json object return by API
    * @return {object} - array of valid TFL modes of transport
    */
    getValidModes(data) {
        let validModes = data.filter((item) => {
            if (item.isTflService) {
                return item.modeName;
            }
        });

        return validModes;
    }

    /** 
    * Request all modes of transport, then filter and set as state
    */
    componentWillMount() {
        let response = this.dataHandler.getAllModes();

        response.then((data) => {
            let validModes = this.getValidModes(data);

            this.setState({
                modes: validModes
            });
        });
    }

    render() {
        var filterItems = [];

        if (this.state.modes.length) {
            this.state.modes.forEach((item, index) => {
                // TODO: Tube, Overground and DLR are currently hardcoded as selected - this should become dynamic 
                // so user can toggle between different modes
                if (item.modeName === 'tube' ||item.modeName === 'overground' || item.modeName === 'dlr') {
                    filterItems.push(<li key={index} className='tfl-filter--item __selected' data-name={item.modeName}>{item.modeName}</li>);
                } else {
                    filterItems.push(<li key={index} className='tfl-filter--item __disabled' data-name={item.modeName}>{item.modeName}</li>);
                }
            });
        }

        return (
            <div className="tfl-filter">
                <p className="tfl-filter--instructions">Select services to filter:</p>

                <ul className="tfl-filter--list">
                    {filterItems}
                </ul>
            </div>
        );
    }
};

module.exports = TransportFilter;
