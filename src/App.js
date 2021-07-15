import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import ProjectList from './containers/ProjectList';
import NavBar from './components/NavBar';
import ArtworkList from './containers/ArtworkList';
import Footer from './components/Footer';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Router>
      <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/pets" component={ArtworkList} />
            <Route exact path="/artworks" component={ArtworkList} />
          </Switch>
        </div>
      <Footer />
      </Router>
    );
  }
}

export default App;
