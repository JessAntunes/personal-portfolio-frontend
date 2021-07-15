import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export class About extends Component {
    render () {
        return (
            <>
                <h2>About</h2>
                <p>Jessica is experienced in Ruby on Rails and JavaScript based programming with a background in Graphic Design, Information Sys- tems Security, Logistics, and Customer Service. Possess strong skills in customer service, problem solving, and computer diagnostics that have helped companies gain customer trust and improved customer retention. Currently a Full Stack Software Engineer student dedicated to engineering user-friendly, thoughtful web applications.</p>
                <Button variant="outline-dark" >Artwork</Button>
            </>
        )
    }
}

export default About