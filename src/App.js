import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Jonathon Orsi</h1>
        </header>

        <main>
          <section>
            <h1>Work</h1>
            <article>
              <h1>Bombardier Inc.</h1>
              <h2>Full Stack Developer</h2>
              <time>October 2016 - Present</time>
              <p>Design, develop, and maintain enterprise-level web applications for Bombardier teams and function groups.</p>
            </article>
            <article>
              <h1>Self-Employed</h1>
              <h2>Freelance</h2>
              <time>April 2015 - Present</time>
              <p>Freelance web development and design work for small-to-medium sized businesses.</p>
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
            <p>I play music professionally (about as professional as you can get while working full-time) in <a href="http://www.jojogun.ca" target="_blank">Jo Jo Gun & the Bullets</a></p>
          </section>
        </main>

      </div>
    );
  }
}

export default App;
