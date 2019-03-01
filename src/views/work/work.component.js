import React, { Component } from 'react';
import './work.component.css';
import { ScribbleService } from '../../services/scribble.service';

export class WorkViewComponent extends Component {
    artService;
    componentDidMount() {
        this.artService = new ScribbleService(document.querySelector('#scribble-container'));
        this.artService.start();
    }

    componentWillUnmount() {
        this.artService.stop();
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
                        <div id="scribble-container" className="column"></div>
                    </div>
                </div>
            </div>
        );
    }
}