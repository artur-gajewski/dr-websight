import React from 'react';
import Statistics from './Statistics'

class Dashboard extends React.Component {
    constructor() {
        super();
    }

    render() {
        var Row = require('react-bootstrap/lib/Row');
        var Col = require('react-bootstrap/lib/Col');

        return (
            <div>
                <h1 className="page-header">Dashboard</h1>

                <Statistics stats={this.props.stats} />

            </div>
        );
    }

};

export default Dashboard;
