import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class HeaderTop extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand href="#home">Japan Quiz</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#login">Quiz</Nav.Link>
          </Nav>
        </Navbar>
    );
  }
}

export default HeaderTop;
