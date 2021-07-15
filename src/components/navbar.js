import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';




export class Navbar extends Component {
  render() {
    return (
      <nav className="indigo darken-3">
        <div className="container">
          <NavLink to="/" className="brand-logo">Jessica Antunes</NavLink>
          <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/projects">Project</NavLink></li>
            <li><NavLink to="/artworks">Artwork</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar