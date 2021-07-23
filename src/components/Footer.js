import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
   
        return (
            <>
                <div className="contact-container">
                    <Row className="contact-row">
                        <Col className="contact-info">
                            <h5>Contact Info</h5>
                            <p>Email: jessantunes@protonmail.com</p>
                            <p>LinkedIn: https://www.linkedin.com/in/jessica-antunes/</p>
                        </Col>
                        <Col className="custom-contact">
                            <h5>Custom Artwork</h5>
                            <p>I am currently not taking inquiries about custom artwork, purchase prints, or items shown under the artwork page.</p>
                        </Col>
                    </Row>
                </div>
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

export default Footer