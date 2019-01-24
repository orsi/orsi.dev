import React, { Component } from 'react';
import './splash.component.css';
import { Link } from 'react-router-dom';

export default class SplashComponent extends Component {
    render() {
        return(
            <header className="splash-component">
                <div className="flex justify-content-center align-items-center flex-column">
                    <div className="">
                        <h1>
                            <span className="jonathon">Jonathon</span>
                            <span className="orsi">Orsi</span>
                        </h1>
                    </div>
                    <div className="">
                        <h2>
                            Full-stack Developer
                        </h2>
                    </div>
                    <div className="">
                        <ul className="view-links-list list-unstyled">
                            <li className="view-links-list-item"><Link to="/about">About</Link></li>
                            <li className="view-links-list-item"><Link to="/work">Work</Link></li>
                            <li className="view-links-list-item"><Link to="/projects">Projects</Link></li>
                            <li className="view-links-list-item"><Link to="/resume">Resume</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}