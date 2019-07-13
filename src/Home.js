import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const StyledLink = styled(Link)`
  display: block;
  width: 250px;
  text-decoration: none;
  color: white;
  &:hover,
  &:focus {
    text-decoration: none;
    color: white;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
`;

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Button variant="success">
          <StyledLink to="/owner">I'm a garden owner</StyledLink>
        </Button>
        <Button variant="warning">
          <StyledLink to="/gardener">I'm a passionate gardener</StyledLink>
        </Button>
      </Container>
    );
  }
}
