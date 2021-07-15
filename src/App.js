import React, { Component } from 'react';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <Router>
      <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/pets" component={PetList} />
            <Route exact path="/artworks" component={ArtworkList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
