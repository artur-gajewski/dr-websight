import './client.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, RouteHandler } from 'react-router'

import store from './store';
import { Provider } from 'react-redux';
import AppContainer from "./components/smart/AppContainer";
import DashboardContainer from "./components/smart/DashboardContainer";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={DashboardContainer}/>
                <Route path="dashboard" component={DashboardContainer}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
