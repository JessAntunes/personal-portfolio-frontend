import React, {Component} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


export class Footer extends Component {
    render () {
        return (
            <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Text href="/">© 2021 Jessica Antunes. All rights reserved</Navbar.Text>
          <Nav className="me-right">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/artworks">Artwork</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
        )
    }
}

export default Footer