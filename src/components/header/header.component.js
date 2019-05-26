import React, { Component } from 'react';
import './header.component.css';
import { MdHelp, MdWork, MdCode, MdDescription } from 'react-icons/md';
import { AutomataService } from '../../services/automata.service';

export class HeaderComponent extends Component {
  automataService;
  componentDidMount() {
    this.automataService = new AutomataService(document.querySelector('#life-container'));
    this.automataService.start();
  }
  componentWillUnmount() {
    this.automataService.stop();
  }
  render() {
    return (
      <div className="home h-100 flex justify-content-center align-items-center flex-column h-100">
        <div className="home-title">
          <h1>
            <span className="jonathon">Jonathon</span>
            <span className="orsi">Orsi</span>
          </h1>
        </div>
        <div id="life-box">
          <div id="life-container"></div>
        </div>
        <nav className="home__nav">
          <ul className="home__links-list list-unstyled">
              <li className="home__links-item">
                <a className="link link--about" href="#about">
                  <span className="link-icon"><MdHelp /></span>
                  <span className="link-text">About</span>
                </a>
              </li>
              <li className="home__links-item">
                <a className="link link--work" href="#work">
                  <span className="link-icon"><MdWork /></span>
                  <span className="link-text">Work</span>
                </a>
              </li>
              <li className="home__links-item">
                <a className="link link--projects" href="#projects">
                  <span className="link-icon"><MdCode /></span>
                  <span className="link-text">Projects</span>
                </a>
              </li>
              <li className="home__links-item">
                <a className="link link--resume" href="#resume">
                  <span className="link-icon"><MdDescription /></span>
                  <span className="link-text">Resume</span>
                </a>
              </li>
          </ul>
        </nav>
      </div>
    );
  }
}
