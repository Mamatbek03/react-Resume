import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand className="fs-2 me-5">Biography</Navbar.Brand>
          </Link>
          <Nav className="me-auto  ">
            <Link to="/skills">
              <Navbar.Brand className="fs-4 mx-3">Skills</Navbar.Brand>
            </Link>
            <Link to="/hobbys">
              <Navbar.Brand className="fs-4 mx-3">Hobbys</Navbar.Brand>
            </Link>
            <Link to="/contacts">
              <Navbar.Brand className="fs-4 mx-3">Contacts</Navbar.Brand>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
