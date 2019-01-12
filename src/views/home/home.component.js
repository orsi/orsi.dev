import React, { Component } from 'react';
import './home.component.css';
import GenerativeCanvasService from '../../services/generative-canvas.service.js';
import Splash from '../../components/splash.component.js';
import Work from '../../components/work.component.js';
import Education from '../../components/education.component.js';
import Misc from '../../components/misc.component.js';
import Portfolio from '../../components/portfolio.component.js';

class HomeViewComponent extends Component {

  canvasElement;
  componentDidMount() {
      // grab reference of canvas
      this.canvasElement = document.querySelector('#home-canvas');
      if (this.canvasElement !== undefined) {
          GenerativeCanvasService.init(this.canvasElement.getContext('2d'));
          GenerativeCanvasService.start();
      }
  }

  render() {
    return (
      <div className="home">

        <div className="home-canvas-container">
              <canvas id="home-canvas"></canvas>
        </div>

        <section>
          <Splash></Splash>
        </section>

        <main className="container">
          <section>
            <Work></Work>
          </section>

          <section>
            <Portfolio></Portfolio>
          </section>

          <section>
            <Education></Education>
          </section>

          <section>
            <Misc></Misc>
          </section>

        </main>
      </div>
    );
  }
}

export default HomeViewComponent;
