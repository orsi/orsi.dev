import React, { Component } from 'react';
import './app.component.css';
import * as FaviconService from './services/favicon.service.js';
import Splash from './components/splash.component.js';
import Work from './components/work.component.js';
import Education from './components/education.component.js';
import Misc from './components/misc.component.js';
import Portfolio from './components/portfolio.component.js';

class AppComponent extends Component {

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

export default AppComponent;
