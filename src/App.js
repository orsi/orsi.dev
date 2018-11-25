import React, { Component } from 'react';
import './App.css';
import * as FaviconService from './services/favicon.service.js';
import Splash from './components/Splash.js';
import Work from './components/work.component.js';
import Education from './components/education.component.js';
import Misc from './components/misc.component.js';
import Portfolio from './components/portfolio.component.js';

class App extends Component {

  componentDidMount() {
    FaviconService.start();
  }

  render() {
    return (
      <div className="App">

        <section className="App-header">
          <Splash></Splash>
        </section>

        <main>
          <section>
            <Work></Work>
          </section>

          <section>
            <Education></Education>
          </section>

          <section>
            <Misc></Misc>
          </section>

          <section>
            <Portfolio></Portfolio>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
