import React from 'react';
import Statusbox from './Statusbox';

const Statistics = (props) => {

    var Row = require('react-bootstrap/lib/Row');
    var Col = require('react-bootstrap/lib/Col');

    const { stats } = props;

    return (
        <Row>
            {stats.map(status =>
                <Statusbox status={status} />
            )}
        </Row>
    );

};

export default Statistics;
