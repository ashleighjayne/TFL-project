'use strict';

let React = require('react');
let ReactDOM = require('react-dom');
let urlParams = {
		domain: 'https://api.tfl.gov.uk/',
		lineParams: ['Line/Mode/', 'Status'],
		modeParams: ['Line/Meta/Modes']
	};

import Header from './Header';
import TransportTable from './TransportTable';

let getJSON = (url) => {
	let xhr = new XMLHttpRequest();

	return new Promise((resolve, reject) => {
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject(xhr.responseText);
				}
			}
		};
		xhr.open('GET', url);
		xhr.send();
	});
}

let getValidModes = (data) => {
	console.log('getValidModes');
	let validModes = [];

	data.forEach((item) => {
		if (item.isTflService) {
			validModes.push(item.modeName);
		}
	});

	return validModes;
}

class TransportFilter extends React.Component {
	// constructor(props) {
 //        super(props);
 //        console.log(this.state);
 //        // this.state = {
 //        //     modes: this.state.data,
 //        //     selected: []
 //        // };

        
 //    }

    // getLineData(url) {
    // 	console.log('getServiceStatuses');
    // 	//let url = 

    // 	getJSON(url)
		  // .then(function (data) {
		  //   console.log(data);

		  // }); 

    // }

    // updateURL(event) {
    // 	console.log('updateURLParams');

    // 	let url;

    // 	this.props.selected.forEach((mode) => {

    // 	});



    // 	url = urlParams.domain + lineParams[0] + this.props.selected + lineParams[1];
    // }

	render() {
		console.log(this.state);
		// getJSON('https://api.tfl.gov.uk/Line/Meta/Modes')
		//   .then(function (data) {
		//     console.log(data);
		//     // Promise.all(data.users_list.map(getJSON))
		//     // .then(function (users) {
		//     //   console.log(users);
		//     // });
		//   }); 
	

        return (
            <div className="filter">
                                
            </div>
        );
    }
};


class App extends React.Component {
    constructor() {
    	super();

    	this.state = {
    		data: {}
    	};
  	}

    loadData() {
        let modeUrl = urlParams.domain + urlParams.modeParams[0];
        let modes = [];

        getJSON(modeUrl).
            then((json) => {
            	let modes = getValidModes(json);
                this.setState({
                    data: modes
                });
            });
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div>
                <Header modes="Tube, Overground, DLR"/>
	            <TransportFilter/>
	            <TransportTable/>
            </div>
        );
    }
}


ReactDOM.render(<App/>,  document.getElementById("app"));
