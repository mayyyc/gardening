import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "./graphql/queries";

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default class GardenerEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owners: []
    };
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
    return (
      <Container>
        {this.state.owners.map((owner, index) => {
          return (
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img
                variant="top"
                height="200"
                src={`/garden${Math.floor(Math.random() * Math.floor(3))}.jpg`}
              />
              <Card.Body>
                <Card.Title>{owner.name}</Card.Title>
                <Card.Text>
                  <span>Garden type: {owner.gardenType}</span>
                  <br />
                  <span>{`Plants: ${owner.plant1} / ${owner.plant2} / ${owner.plant3}`}</span>
                  <br />
                  <span>Address: {owner.address}</span>
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    );
  }
}
