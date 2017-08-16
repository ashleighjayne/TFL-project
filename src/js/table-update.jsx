let React = require('react');

/* 
* Table Update
* Loads info re last update and allows users to manually refresh data
*/
class TableUpdate extends React.Component {
    /** 
    * @param {object} props - pollingTimer Object
    */
    constructor(props) {
        super(props);

        this.pollingTimer = props.pollingTimer;
        this.state = {
            time: ''
        };
    }

    setEventListeners() {
        let refreshButton = document.querySelector('.tfl-update--button');

        refreshButton.addEventListener('click', () => {
            this.pollingTimer.clearInterval();
            document.dispatchEvent(this.pollingTimer.event);
            this.pollingTimer.setInterval();
        });

        document.addEventListener('newDataRequested', () => {
            this.setTime();
        });
    }

    /** 
    * Set current time in this.state - will cause re-render of component
    */
    setTime() {
        let time = new Date().toLocaleTimeString('en-GB', { hour12: true, hour:'numeric', minute:'numeric', second:'numeric'});

        this.setState({
            time: time
        });
    }

    componentWillMount() {
        this.setTime();
    }

    componentDidMount() {
        this.setEventListeners();
    }

    render() {
        return (
            <div className="tfl-update">
                <span className="tfl-update--time">Last updated: {this.state.time}</span>
                <span className="tfl-update--button">REFRESH</span>
            </div>
        );
    }
};

module.exports = TableUpdate;
