import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';





const NavBar = () => {
    return (

      <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">Jessica Antunes Portfolio</Navbar.Brand>
          <Nav className="me-right">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/artworks">Artwork</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
    );
}

export default NavBar