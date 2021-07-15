import React, { Component } from 'react';
import Skills from './components/Skills';
import HomeBanner from './components/HomeBanner';
import About from './components/About';


export class Home extends Component {
  render() {
    return (
      <>
        <HomeBanner />
        <row className="middle-row">
            <col className="skills"> <Skills /> </col>
            <col className="about"> <About /> </col>
        </row>
      </>
    )
  }
}

export default Home