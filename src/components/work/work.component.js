import React, { Component } from 'react';
import './work.component.css';
import { MondrianService } from '../../services/mondrian.service';

export class WorkComponent extends Component {
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
                    <h2 className="work-title">Work</h2>
                    <div className="row">
                        <div className="column">
                            <div id="canvas-container" title="A Generative 'Piet Mondrian' Art"></div>
                        </div>
                        <div className="column">
                            <div className="work-item">
                                <time className="work-duration">October 2016 &rarr; Present</time>
                                <h3 className="work-company">Bombardier Inc.</h3>
                                <h3 className="work-position">Full Stack Developer</h3>
                            </div>
                            <div className="work-item">
                                <time className="work-duration">September 2014 &rarr; Present</time>
                                <h3 className="work-company">Freelance</h3>
                                <h3 className="work-position">Web Developer</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}