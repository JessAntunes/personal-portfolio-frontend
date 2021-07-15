import React, { Component } from 'react';
import Skills from '../components/Skills';
import HomeBanner from '../components/HomeBanner';
import About from '../components/About';
import { Col, Row } from 'react-bootstrap';


export class Home extends Component {
  render() {
    return (
      <>
        <HomeBanner />
        <Row className="middle-row">
            <Col className="skills"> <Skills /> </Col>
            <Col className="about"> <About /> </Col> 
        </Row>
      </>
    )
  }
}

export default Home