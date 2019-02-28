import React, { Component } from 'react';
import './home.component.css';
import { Link } from 'react-router-dom';
import { MdHelp, MdWork, MdCode, MdDescription } from 'react-icons/md';
import { AutomataService } from '../../services/automata.service';

export class HomeViewComponent extends Component {
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
        <h1>
          <span className="jonathon">Jonathon</span>
          <span className="orsi">Orsi</span>
        </h1>
        <h2 className="text-center">
            Web Developer
        </h2>
        <div id="life-container"></div>
        <nav className="home__nav">
          <ul className="home__links-list list-unstyled">
              <li className="home__links-item">
                <Link className="link link--about" to="/about">
                  <span className="link-icon"><MdHelp /></span>
                  <span className="link-text">About</span>
                </Link>
              </li>
              <li className="home__links-item">
                <Link className="link link--work" to="/work">
                  <span className="link-icon"><MdWork /></span>
                  <span className="link-text">Work</span>
                </Link>
              </li>
              <li className="home__links-item">
                <Link className="link link--projects" to="/projects">
                  <span className="link-icon"><MdCode /></span>
                  <span className="link-text">Projects</span>
                </Link>
              </li>
              <li className="home__links-item">
                <Link className="link link--resume" to="/resume">
                  <span className="link-icon"><MdDescription /></span>
                  <span className="link-text">Resume</span>
                </Link>
              </li>
          </ul>
        </nav>
      </div>
    );
  }
}
