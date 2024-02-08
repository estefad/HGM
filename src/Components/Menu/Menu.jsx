import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
//import Contacto from '../Contacto/Contacto'

function Menu() {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to='/'>HGM CONSULTORES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/Nosotros'>Sobre Nosotros</Nav.Link>
            <Nav.Link as={Link} to='/Contacto'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
        <Outlet/> 
    </section>
    </>
  );
}

export default Menu

//Outlet es de recat-router-dom y se utiliza para renderizar=mostrar el contenido de lo que estamos haciendo