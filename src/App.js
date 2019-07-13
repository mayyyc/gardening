import React, { Component } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from "./graphql/queries";
import aws_exports from "./aws-exports";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OwnerEntry from "./OwnerEntry";
import Home from "./Home";
import Navbar from "react-bootstrap/Navbar";

Amplify.configure(aws_exports);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {
      const reasons = await API.graphql(graphqlOperation(queries.listOwners, { limit: 100000 }));
      this.setState({
        owners: reasons.data.listOwners.items
      });
    } catch (err) {
      console.log("error fetching data...", err);
    }
  }

  render() {
    const { owners } = this.state;
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
              </Switch>
            );
          }}
        />
      </Router>
    );
  }
}
