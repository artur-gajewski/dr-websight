import React from 'react';
import moment from 'moment';
import classnames from 'classnames';

const Statusbox = (props) => {

    const { status } = props;

    var Row = require('react-bootstrap/lib/Row');
    var Col = require('react-bootstrap/lib/Col');

    var colors = {
        200: "green",
        404: "danger",
        500: "yellow",
        "DNS-3": "danger"
    };

    var statusColor = colors[status.code];

    const widgetClass = classnames(
        'panel',
        'widget',
        'bg-' + statusColor
    );

    const statusClass = classnames(
        'col-xs-4',
        'text-center',
        'bg-' + statusColor + '-dark',
        'pv-lg'
    );

    return (
        <Col className="col-lg-6 col-m-6">
            <div className={widgetClass}>
                <Row className="row row-table">
                    <Col className={statusClass}>
                        <div className="h2 mt0">{status.code}</div>
                        <div className="text-uppercase">{status.description}</div>
                    </Col>
                    <Col className="col-xs-8 pv-lg">
                            {status.url}
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default Statusbox;

