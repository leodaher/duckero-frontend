import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Waitlist from '../../routes/waitlist';
import Home from '../../routes/home';
import PrivateRoute from '../../components/private-route';

import './App.css';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <PrivateRoute path='/waitlist' component={Waitlist} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
