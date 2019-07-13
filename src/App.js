import React, { Component } from "react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OwnerEntry from "./OwnerEntry";
import Home from "./Home";
import Navbar from "react-bootstrap/Navbar";
import GardenerEntry from "./GardenerEntry";

Amplify.configure(aws_exports);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Letus</Navbar.Brand>
        </Navbar>
        <Route
          render={({ location }) => {
            return (
              <Switch location={location}>
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route path="/owner" render={props => <OwnerEntry {...props} />} />
                <Route path="/gardener" render={props => <GardenerEntry {...props} />} />
              </Switch>
            );
          }}
        />
      </Router>
    );
  }
}
