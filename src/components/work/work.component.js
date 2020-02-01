import './work.component.css';
import React, { Component } from 'react';

export class WorkComponent extends Component {

  render() {
    return (
      <div className="resume">
        <div className="container">
          <ul className="works-list">
      
            <li className="works-list-item">
              <h4 className="work-company">Bombardier Aerospace</h4>
              <div className="work-duration">3 years, 5 months</div>

              <ul className="positions-list">
                <li className="positions-list-item">
                  <h3 className="position-title">Senior Software Developer</h3>
                  <time className="position-time">June 2019 ➔ February 2020, 8 months</time>
                  <p className="position-description">Build, maintain, and lead enterprise-level applications to aide Bombardier quality and production teams.</p>
                </li>
                <li className="positions-list-item">
                  <h3 className="position-title">Full Stack Developer</h3>
                  <time className="position-time">June 2017 ➔ May 2019, 2 years 1 month</time>
                </li>

                <li className="positions-list-item">
                  <h3 className="position-title">Intern - Front End Developer</h3>
                  <time className="position-time">October 2016 ➔ May 2017, 9 months</time>
                </li>

              </ul>
            </li>

            <li className="works-list-item">

              <h4 className="work-company">Freelance Software Developer</h4>
              <time className="position-time">September 2014 ➔ Present, 5 years 6 months</time>
              <p className="position-description">Design and develop custom software solutions for companies, artists, and clients. See <a href="#projects"><em>projects</em></a>.</p>

            </li>

          </ul>
        </div>
      </div>
    );
  }
}