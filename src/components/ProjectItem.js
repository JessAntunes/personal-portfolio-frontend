import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Col, Row } from 'react-bootstrap';

const ProjectItem = ({ project }) => {
    return (
    <li className="collection-item">
        <Card style={{ width: '18rem' }}>
        <Card.Title>{project.item}</Card.Title><p>{project.mod}</p>
        <Card.Img variant="top" src={project.image} />
        <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <h6>{project.technology}</h6>
            <Card.Text>{project.description}</Card.Text>
            <Button href={project.code}>Code</Button><Button href={project.demo}>Demo</Button>
        </Card.Body>
        </Card>
    </li>
    );
}


export default connect(null)(ProjectItem)