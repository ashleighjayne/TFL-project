import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="page-header">
                <div className="home-button">
                    <a href="/" className="home-button--link"><h1>Transport for London</h1></a>
                </div>
                <p>
                	Showing line status for: {this.props.modes}
                </p>
            </header>
        );
    }
};


export default Header;
