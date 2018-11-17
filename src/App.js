import React, { Component } from 'react';
import './App.css';
import * as FaviconService from './services/favicon.service.js';

class App extends Component {

  componentDidMount() {
    FaviconService.start();
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Jonathon Orsi</h1>
          <ul className="contact-list">
            <li className="contact-list-item">
              <a href="mailto:jonathon.orsi@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"/>
              </svg>
              </a>
            </li>
            <li className="contact-list-item">
              <a href="https://www.github.com/jorsi">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
                </svg>
              </a>
            </li>
            <li className="contact-list-item">
              <a href="https://ca.linkedin.com/in/jonorsi">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"/>
                </svg>
              </a>
            </li>
          </ul>
        </header>

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
