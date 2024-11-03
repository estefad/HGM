import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import './Menu.css';


function Menu() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">HGM CONSULTORES</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto menu">
              {/* Enlaces usando react-scroll */}
              <Nav.Link as={Link} to="home" smooth={true} duration={500}>Home</Nav.Link>
              <Nav.Link as={Link} to="nosotros" smooth={true} duration={500}>Sobre Nosotros</Nav.Link>
              <Nav.Link as={Link} to="contacto" smooth={true} duration={500}>Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
