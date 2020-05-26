import React from 'react';
import styled from 'styled-components';

const WorkSectionContainer = styled.section`
padding-bottom: 48px;
    
    .section-title {
        padding: 48px 0;
        text-align: center;
    }

    .works-list {
        list-style: none;
        margin: 0 auto;
        padding: 0;
    }
    .works-list-item {
    
    }
    .works-list-item:not(:first-of-type) {
        margin-top: 24px;
    }
    
    .work-company {
        font-size: 18px;
        margin: 0 auto;
    }
    
    .positions-list {
        list-style: none;
        margin: 16px auto 0 auto;
        padding: 0;
    }
    .positions-list-item:not(:first-of-type) {
        margin-top: 16px;
    }
        .positions-list-item {
            position: relative;
            margin: 0;
            padding-left: 20px;
        }
        .positions-list-item:before {
            content: '';
            background-color: #ddd;
            position: absolute;
            bottom: 0px;
            top: 0px;
            left: 6px;
            width: 3px;
        }
    .position-title {
        font-size: 16px;
        font-weight: 700;
        margin: 0 auto;
        line-height: 1;
    }
    .work-duration,
    .position-time {
        color: #999;
        font-size: 12px;
        line-height: 1;
    }
    .position-description {
        font-size: 16px;
        line-height: 1.4;
        margin: 0;
    }
`;

export default function WorkSection () {
  return (
    <WorkSectionContainer>
        <ul className="works-list">

          <li className="works-list-item">
            <h4 className="work-company">Bombardier Aerospace</h4>
            <div className="work-duration">3 years, 5 months</div>

            <ul className="positions-list">
              <li className="positions-list-item">
                <h3 className="position-title">Senior Software Developer</h3>
                <time className="position-time">June 2019 ➔ February 2020, 8 months</time>
                <p className="position-description">Build and maintain enterprise-level applications that aide Bombardier quality and production teams. Project lead junior developers.</p>
              </li>
              <li className="positions-list-item">
                <h3 className="position-title">Full Stack Developer</h3>
                <time className="position-time">June 2017 ➔ May 2019, 2 years 1 month</time>
              </li>

              <li className="positions-list-item">
                <h3 className="position-title">Front End Developer</h3>
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
    </WorkSectionContainer>
  );
}