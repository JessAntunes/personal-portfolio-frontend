import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Footer extends Component {
    render () {
        return (
            <>
            <div className="footer">
                <row>
                    <col className="contact"></col>
                    <col className="email"></col>
                </row>
            </div>

            <div className="container">
                <NavLink to="/" className="brand-logo">Jessica Antunes</NavLink>
                <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/projects">Project</NavLink></li>
                    <li><NavLink to="/artworks">Artwork</NavLink></li>
                </ul>
            </div>
            </>
        )
    }
}

export default Footer