// React - ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from './components/Home';
import NotFound from './components/NotFound';
// css


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
