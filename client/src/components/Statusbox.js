import React from 'react';
import moment from 'moment';
import classnames from 'classnames';

const Statusbox = (props) => {

    const { status } = props;

    var Row = require('react-bootstrap/lib/Row');
    var Col = require('react-bootstrap/lib/Col');

    console.log(status);

    return (
        <Col className="col-lg-6 col-m-6">
            <div className="panel widget bg-primary">
                <Row className="row row-table">
                    <Col className="col-xs-4 text-center bg-primary-dark pv-lg">
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

