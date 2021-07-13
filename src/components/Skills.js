import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Col, Row } from 'react-bootstrap';
import Chip from '@material-ui/core/Chip';


export default function SkillsCard() {

    return (

        <Card border="info" style={{ width: '24rem' }}>
            <Card.Body>
            <Card.Title>Skills</Card.Title>
            <Row >
                <Col ><Chip variant="outlined" size="small" label="Ruby" /></Col>
                <Col ><Chip variant="outlined" size="small" label="JavaScript" /></Col>
                <Col ><Chip variant="outlined" size="small" label="VS Code" /></Col>
            </Row>
            <Row >
                <Col ><Chip variant="outlined" size="small" label="Ruby on Rails" /></Col>
                <Col ><Chip variant="outlined" size="small" label="React" /></Col>
                <Col ><Chip variant="outlined" size="small" label="Adobe Illustrator" /></Col>
            </Row>
            <Row >
                <Col ><Chip variant="outlined" size="small" label="Sinatra" /></Col>
                <Col ><Chip variant="outlined" size="small" label="Redux" /></Col>
                <Col ><Chip variant="outlined" size="small" label="Adobe InDesign" /></Col>
            </Row>
            <Row >
                <Col ><Chip variant="outlined" size="small" label="Git/Github" /></Col>
                <Col ><Chip variant="outlined" size="small" label="HTML5/CSS" /></Col>
                <Col ><Chip variant="outlined" size="small" label="Adobe Photoshop" /></Col>
            </Row>
            <Button variant="outline-dark" >Projects</Button>
            </Card.Body>
        </Card>
    )
}



