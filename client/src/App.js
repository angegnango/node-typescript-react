import React, { Component } from "react";
import { render } from "react-dom";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Counting from './components/Counting';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/occupancy" /> }/>
        <Route exact path="/occupancy" component={Counting} />
      </Switch>
  </Router>
  );
}

export default App;
