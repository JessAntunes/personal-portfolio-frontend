import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import HomeBanner from './components/HomeBanner';

class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <HomeBanner />
      <Skills />
      </>
    );
  }
}

export default App;
