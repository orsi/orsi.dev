import React, { Component } from 'react';
import './home.component.css';

import { Link } from 'react-router-dom';

class HomeViewComponent extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="home">
        <header className="home__header h-100">
              <div className="flex justify-content-center align-items-center flex-column h-100">
                  <h1>
                    <span className="jonathon">Jonathon</span>
                    <span className="orsi">Orsi</span>
                  </h1>
                  <h2 className="text-center">
                      Full-stack Developer
                  </h2>
                  <nav className="home__nav w-100 text-center">
                    <ul className="home__links-list list-unstyled">
                        <li className="home__links-item"><Link to="/about">About</Link></li>
                        <li className="home__links-item"><Link to="/work">Work</Link></li>
                        <li className="home__links-item"><Link to="/projects">Projects</Link></li>
                        <li className="home__links-item"><Link to="/resume">Resume</Link></li>
                    </ul>
                  </nav>
              </div>
          </header>
      </div>
    );
  }
}

export default HomeViewComponent;
