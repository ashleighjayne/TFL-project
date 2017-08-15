import React from 'react';

class Filter extends React.Component {
	render() {
        return (
            <div className="filter">
                                
            </div>
        );
    }
};

export default Filter;

// function loadData() {
//   getJSON('users.json')
//   .then(function (data) {
//     console.log(data.group);
//     Promise.all(data.users_list.map(getJSON))
//     .then(function (users) {
//       console.log(users);
//     });
//   });
// }


// class MortgageCalculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             principal: this.props.principal,
//             years: this.props.years,
//             rate: this.props.rate
//         };
//     }
//     principalChange(event) {
//         this.setState({principal: event.target.value});
//     }
//     yearsChange(event) {
//         this.setState({years: event.target.value});
//     }
//     rateChange(event) {
//         this.setState({rate: event.target.value});
//     }
//     render() {
//         let payment = calculatePayment(this.state.principal, this.state.years, this.state.rate);
//         let monthlyPayment = payment.monthlyPayment;
//         let amortization = payment.amortization;

//         <input type="text" value={this.state.principal} 
//         onChange={this.principalChange.bind(this)}/>

//         return (
//             <div className="content">
//                 <div className="form">
//                     <div>
//                         <label>Principal:</label>
//                         <input type="text" value={this.state.principal} onChange={this.principalChange}/>
//                     </div>
//                     <div>
//                         <label>Years:</label>
//                         <input type="text" value={this.state.years} onChange={this.yearsChange}/>
//                     </div>
//                     <div>
//                         <label htmlFor="rate">Rate:</label>
//                         <input type="text" value={this.state.rate} onChange={this.rateChange}/>
//                     </div>
//                 </div>
//                 <h2>Monthly Payment: <span className="currency">{Number(monthlyPayment.toFixed(2)).toLocaleString()}</span></h2>
//                 <AmortizationChart data={amortization}/>
//             </div>
//         );
//     }
// };
