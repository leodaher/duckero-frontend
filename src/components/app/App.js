import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Waitlist from "../../routes/waitlist";
import Home from "../../routes/home";
import CheckPositionHome from "../../routes/check-position-home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/waitlist" component={Waitlist} />
          <Route path="/:id" component={CheckPositionHome} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
