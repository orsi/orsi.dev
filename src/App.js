import React, { Component } from 'react';
import './App.css';
import Splash from './components/Splash.js';
import * as FaviconService from './services/favicon.service.js';

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
            <h1>Work</h1>
            <article>
              <h1>Bombardier Inc.</h1>
              <h2>Full Stack Developer</h2>
              <time>October 2016 - Present</time>
              <p>Design, develop, and maintain enterprise-level web applications for Bombardier quality and production teams.</p>
              <ul className="keyword-list">
                <li className="keyword-list-item">.Net MVC/WebApi/Core</li>
                <li className="keyword-list-item">Angular</li>
                <li className="keyword-list-item">AngularJS</li>
                <li className="keyword-list-item">SASS</li>
                <li className="keyword-list-item">Typescript</li>
                <li className="keyword-list-item">Bootstrap</li>
                <li className="keyword-list-item">jQuery</li>
                <li className="keyword-list-item">SQL Server</li>
                <li className="keyword-list-item">SSIS</li>
                <li className="keyword-list-item">NPM</li>
                <li className="keyword-list-item">Node.js</li>
              </ul>
            </article>
            <article>
              <h1>Self-Employed</h1>
              <h2>Freelance</h2>
              <time>April 2015 - Present</time>
              <p>Freelance web development and design work for small-to-medium sized businesses.</p>
              <ul className="keyword-list">
                <li className="keyword-list-item">Node.js</li>
                <li className="keyword-list-item">NPM</li>
                <li className="keyword-list-item">AngularJS</li>
                <li className="keyword-list-item">SASS</li>
                <li className="keyword-list-item">Bootstrap</li>
                <li className="keyword-list-item">jQuery</li>
                <li className="keyword-list-item">Wordpress</li>
                <li className="keyword-list-item">MySQL</li>
                <li className="keyword-list-item">MongoDB</li>
                <li className="keyword-list-item">Express</li>
                <li className="keyword-list-item">Shopify</li>
                <li className="keyword-list-item">Google Analytics</li>
                <li className="keyword-list-item">Instagram/Twitter/Facebook APIs</li>
              </ul>
            </article>
          </section>

          <section>
            <h1>Education</h1>
            <article>
              <h1>George Brown College</h1>
              <h2>Computer Programmer Analyst</h2>
              <time>2014 - 2017</time>
            </article>
            <article>
              <h1>University of Toronto</h1>
              <h2>HBa Philosophy & Latin</h2>
              <time>2008 - 2013</time>
            </article>
          </section>

          <section>
            <h1>Miscellaneous</h1>
            <ul className="misc-list">

              <li className="misc-list-item">
                <span>I play guitar and sing in <a href="http://www.jojogun.ca">Jo Jo Gun & the Bullets</a></span>
              </li>
              <li className="misc-list-item">
                <span>I often experiment with <a href="https://www.webcomponents.org/introduction">custom web components</a> and using the browser as a platform for <a href="https://github.com/jorsi/reverie/tree/develop">all-sorts of curiosities</a></span>
              </li>
            </ul>
          </section>

          <section>
            <h1>Portfolio</h1>
            <ul className="portfolio-list">
              <li className="portfolio-list-item">
                <a href="http://www.humblerootsmedia.com">Humble Roots Media</a>
              </li>
              <li className="portfolio-list-item">
                <a href="http://screencanadianelit.ca/betical/">Betical</a>
              </li>
              <li className="portfolio-list-item">
                <a href="http://www.jojogun.ca/">Jo Jo Gun & the Bullets</a>
              </li>
            </ul>
          </section>
        </main>

      </div>
    );
  }
}

export default App;
