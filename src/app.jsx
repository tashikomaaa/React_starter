// React - ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from './components/Home.jsx';
import NotFound from './components/NotFound.jsx';
// css
require('./assets/styles/app.scss');
require('./assets/bootstrap/dist/css/bootstrap.min.css');
require('./assets/bootstrap/dist/css/bootstrap-theme.min.css');

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route component={ NotFound } />
            </Switch>
        </div>
    </Router>
    , document.getElementById('react')
);
