import React, { Component } from 'react';
import './header.component.css';
import { MdHelp, MdWork, MdCode, MdDescription } from 'react-icons/md';

export class HeaderComponent extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1>Jonathon Orsi</h1>
          <nav className="home-nav">
            <ul className="home-links-list list-unstyled">
                <li className="home-links-item">
                  <a className="link link--about" href="#about">
                    <span className="link-icon"><MdHelp /></span>
                    <span className="link-text">About</span>
                  </a>
                </li>
                <li className="home-links-item">
                  <a className="link link--projects" href="#projects">
                    <span className="link-icon"><MdCode /></span>
                    <span className="link-text">Projects</span>
                  </a>
                </li>
                <li className="home-links-item">
                  <a className="link link--resume" href="#resume">
                    <span className="link-icon"><MdDescription /></span>
                    <span className="link-text">Resume</span>
                  </a>
                </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
