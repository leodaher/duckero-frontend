import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Waitlist from '../../routes/waitlist';
import Home from '../../routes/home';

import './App.css';


class App extends Component {
    render() {
        console.log(Waitlist);
        console.log(Home);
        return (
          <BrowserRouter>
            <Route path='/' exact component={Home} />
            <Route path='/waitlist' component={Waitlist} />
          </BrowserRouter>
        );
    }
}

export default App;
