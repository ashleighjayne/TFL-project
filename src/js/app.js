'use strict';

let React = require('react');
let ReactDOM = require('react-dom');
let urlParams = {
		domain: 'https://api.tfl.gov.uk/',
		lineParams: ['Line/Mode/', 'Status'],
		modeParams: ['Line/Meta/Modes'],
		modes: []
	};

import Header from './Header';
import TransportTable from './TransportTable';

let getJSON = (url) => {
	console.warn('getJSON');

	let xhr = new XMLHttpRequest();
	//let url = 'https://api.tfl.gov.uk/Line/Mode/tube%2Cdlr/Status?detail=true';
	//let url = requestURLParams.domain + requestURLParams.params[0] + transportModes + requestURLParams.params[1];

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

let setState = (data) => {
	console.log('setState');
	console.log(data);

}

class TransportFilter extends React.Component {
	constructor() {
        super();
        // this.state = {
        //     modes: this.props.modes,
        //     selected: this.props.selected
        // };
    }

    getAllModes() {
    	getJSON('https://api.tfl.gov.uk/Line/Meta/Modes')
		  .then(function (data) {
		    console.log(data);
		    // this.state = {
	     //        // modes: this.props.modes,
	     //        // selected: this.props.selected
	     //    };

		  }); 

    }

    updateURLParams(event) {
    	console.log('updateURLParams');
    }

	render() {

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
    render() {
    	let modeUrl = urlParams.domain + urlParams.modeParams[0];
    	getJSON(modeUrl)
		  .then(function (data) {
		    console.log(data);
		    setState(data);
		    // this.state = {
	     //        // modes: this.props.modes,
	     //        // selected: this.props.selected
	         // };
		  });

        return (
            <div>
                <Header modes="Tube, Overground, DLR"/>
                <TransportFilter/>
                <TransportTable/>
            </div>
        );
    }
};

ReactDOM.render(<App/>,  document.getElementById("app"));
