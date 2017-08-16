let React = require('react');

class TransportFilter extends React.Component {
    constructor(props) {
        super(props);

        this.dataHandler = props.dataHandler;

        this.state = {
            modes: [],
            selected: []
        };
    }

    getValidModes(data) {
        let validModes = data.filter((item) => {
            if (item.isTflService) {
                return item.modeName;
            }
        });

        return validModes;
    }

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
                if (item.modeName === "tube" ||item.modeName === "overground" || item.modeName === "dlr") {
                    filterItems.push(<li key={index} className='tfl-filter--item selected' data-name={item.modeName}>{item.modeName}</li>);
                } else {
                    filterItems.push(<li key={index} className='tfl-filter--item disabled' data-name={item.modeName}>{item.modeName}</li>);
                }
            });
        }

        return (
            <div className="tfl-filter">
                <ul className="tfl-filter--list">
                    {filterItems}
                </ul>
            </div>
        );
    }
};

module.exports = TransportFilter;
