import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "./graphql/mutations";
import { Redirect } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled(Form)`
  width: 400px;
`;

export default class OwnerEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gardenType: undefined,
      plant1: "",
      plant2: "",
      plant3: "",
      address: "",
      note: ""
    };
  }
  submitGarden = async () => {
    const { name, gardenType, plant1, plant2, plant3, address, note } = this.state;
    await API.graphql(
      graphqlOperation(mutations.createOwner, {
        input: {
          name: name,
          gardenType: gardenType,
          plant1: plant1,
          plant2: plant2,
          plant3: plant3,
          address: address,
          note: note
        }
      })
    )
      .then(() => this.setState({ submitted: true }))
      .catch(err => this.setState({ submitErrored: true }));
  };
  render() {
    const { name, gardenType, plant1, plant2, plant3, address, note, submitted } = this.state;
    return (
      <Container>
        {submitted && <Redirect to="/" />}
        <StyledForm>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={e => this.setState({ name: e ? e.target.value : null })}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Type of Garden</Form.Label>
            <Form.Control
              as="select"
              value={gardenType}
              onChange={e => this.setState({ gardenType: e ? e.target.value : null })}
            >
              <option value="" />
              <option value="veggie">Veggie</option>
              <option value="flowers">Flowers</option>
              <option value="maintain">Maintain current</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Plant Desired</Form.Label>
            <Form.Control
              type="text"
              value={plant1}
              onChange={e => this.setState({ plant1: e ? e.target.value : null })}
            />
            <Form.Control
              type="text"
              value={plant2}
              onChange={e => this.setState({ plant2: e ? e.target.value : null })}
            />
            <Form.Control
              type="text"
              value={plant3}
              onChange={e => this.setState({ plant3: e ? e.target.value : null })}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={address}
              onChange={e => this.setState({ address: e ? e.target.value : null })}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Additional Note</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={note}
              onChange={e => this.setState({ note: e ? e.target.value : null })}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.submitGarden}>
            Submit
          </Button>
        </StyledForm>
      </Container>
    );
  }
}
