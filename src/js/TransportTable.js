import React from 'react';

class TransportTable extends React.Component {
	render() {
		
		// let items = this.props.data.map((year, index) => {
  //       	return (
  //           	<div class="transport-table">
  //           		<tr key={index}>
	 //                    <td>{index + 1}</td>
	 //                    <td className="currency principal">{Math.round(year.principalY).toLocaleString()}</td>
	 //                    <td className="stretch">
	 //                        <div className="flex">
	 //                            <div className="bar principal" style={{flex: year.principalY, WebkitFlex: year.principalY}}></div>
	 //                            <div className="bar interest" style={{flex: year.interestY, WebkitFlex: year.interestY}}></div>
	 //                        </div>
	 //                    </td>
	 //                    <td className="currency interest">{Math.round(year.interestY).toLocaleString()}</td>
	 //                    <td className="currency">{Math.round(year.balance).toLocaleString()}</td>
	 //                </tr>
  //           	</div>
  //       	);
  //       });
        return (
            <table>
                <thead>
                <tr>
                    <th>Year</th>
                    <th className="principal">Principal</th>
                    <th className="stretch"></th>
                    <th className="interest">Interest</th>
                    <th>Balance</th>
                </tr>
                </thead>
            </table>
        );
    }
};

export default TransportTable;