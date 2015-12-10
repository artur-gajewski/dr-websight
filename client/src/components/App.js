import React from 'react';
import { Link } from 'react-router'

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        var Row = require('react-bootstrap/lib/Row');
        var Col = require('react-bootstrap/lib/Col');

        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <a className="navbar-brand" href="/">Dr Websight</a>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    <Row>
                        <Col className="col-sm-3 col-md-2 sidebar">
                            <ul className="nav nav-sidebar">
                                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                            </ul>
                        </Col>
                        <Col className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            {this.props.children}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const { dashboardActions } = this.props;

        dashboardActions.pingWebsite('http://www.arturgajewskffi.com');
        dashboardActions.pingWebsite('http://www.arturgajewski.com/piano');
        dashboardActions.pingWebsite('http://www.virtuaalihepat.com');

    }

};

export default App;
