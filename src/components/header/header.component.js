import './header.component.css';
import React, { Component } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';

export class HeaderComponent extends Component {
  render() {
    return (
      <div id="home">
        <h1 id="jonathon-orsi">Jonathon Orsi</h1>

        <ul className="media-list">
          <li className="media-list-item">
            <a href="mailto:jonathon.orsi@gmail.com">
              <MdEmail />
            </a>
          </li>
          <li className="media-list-item">
            <a href="https://github.com/jorsi"
              target="_blank">
              <GoMarkGithub />
            </a>
          </li>
          <li className="media-list-item">
            <a href="https://www.linkedin.com/in/jonorsi/"
              target="_blank">
              <FaLinkedin />
            </a>
          </li>
        </ul>

        <nav id="navigation-main">
          <ul className="navigation-list">
            <li className="navigation-list-item">
              <a href="#about">
                About
              </a>
            </li>
            <li className="navigation-list-item">
              <a href="#projects">
                Projects
              </a>
            </li>
            <li className="navigation-list-item">
              <a href="#work">
                Work
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
