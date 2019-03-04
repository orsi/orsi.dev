import React, { Component } from 'react';
import './work.component.css';
import { MondrianService } from '../../services/mondrian.service';

export class WorkViewComponent extends Component {
    mondrianService;
    componentDidMount() {
        this.mondrianService = new MondrianService(document.querySelector('#canvas-container'));
        this.mondrianService.start();
    }

    componentWillUnmount() {
        // this.mondrianService.stop();
    }
    render() {
        return (
            <div className="work">
                <div className="container">
                    <h2>Work</h2>
                    <div className="row">
                        <div className="column">
                            <div className="work-item">
                                <h3 className="work-title">
                                    Full Stack Developer @ <strong>Bombardier Inc.</strong>
                                </h3>
                                <time className="work-duration">October 2016 &rarr; Present</time>
                                <p className="work-description">Design and develop enterprise web applications which digitize business processes currently used to build the Global, Q Series, C Series, and Lear aircraft.</p>
                            </div>
                            <div className="work-item">
                                <h3 className="work-title">
                                    Freelance Web Developer
                                </h3>
                                <time className="work-duration">April 2015 &rarr; Present</time>
                                <p className="work-description">Freelance web development and design work for small-to-medium sized businesses.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div id="canvas-container"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}