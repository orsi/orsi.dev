import React, { Component } from 'react';
import './app.component.css';
import * as FaviconService from './services/favicon.service.js';
import GenerativeCanvasService from './services/generative-canvas.service.js';
import Splash from './components/splash.component.js';
import Work from './components/work.component.js';
import Education from './components/education.component.js';
import Misc from './components/misc.component.js';
import Portfolio from './components/portfolio.component.js';

class AppComponent extends Component {

  canvasElement;
  componentDidMount() {
    FaviconService.start();

      // grab reference of canvas
      this.canvasElement = document.querySelector('#app-canvas');
      if (this.canvasElement !== undefined) {
          GenerativeCanvasService.init(this.canvasElement.getContext('2d'));
          GenerativeCanvasService.start();
      }
  }

  render() {
    return (
      <div className="app">

        <div className="app-canvas-container">
              <canvas id="app-canvas"></canvas>
        </div>

        <section>
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
