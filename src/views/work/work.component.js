import React, { Component } from 'react';
import './work.component.css';

export default class WorkComponent extends Component {
    render() {
        return(
            <div className="work">
                <div className="container">
                    <h2 className="section-title">Work</h2>
                    <div className="work-item">
                        <div className="work-item-title">
                            <span>Full Stack Developer @ <strong>Bombardier Inc.</strong></span>
                        </div>
                        <time className="work-item-time">October 2016</time>
                        <p className="work-item-description">Design and develop enterprise web applications which digitize business processes currently used to build the Global, Q Series, C Series, and Lear aircraft.</p>
                    </div>
                    <div className="work-item">
                        <div className="work-item-title">
                            <span>Freelance Web Developer</span>
                        </div>
                        <time className="work-item-time">April 2015</time>
                        <p className="work-item-description">Freelance web development and design work for small-to-medium sized businesses.</p>
                    </div>
                </div>
            </div>
        );
    }
}