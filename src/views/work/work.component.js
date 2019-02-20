import React, { Component } from 'react';
import './work.component.css';
import { IconContext } from "react-icons";
import { FiEdit, FiImage, FiCode } from 'react-icons/fi';

export default class WorkComponent extends Component {
    render() {
        return (
            <div className="work">
                <div className="container">
                    <h2 className="section-title">Work</h2>
                    <div className="row">
                        <div className="column">
                            <div className="work__splash flex justify-content-between align-items-center">
                                <IconContext.Provider value={{ className: "react-icons" }}>
                                    <FiEdit className="analyze red" />
                                    <FiImage className="design green" />
                                    <FiCode className="develop blue" />
                                </IconContext.Provider>
                            </div>
                        </div>
                        <div className="column">
                            <div className="work__item">
                                <div className="work__title">
                                    <span>Full Stack Developer @ <strong>Bombardier Inc.</strong></span>
                                </div>
                                <time className="work__duration">October 2016 &rarr; Present</time>
                                <p className="work__description">Design and develop enterprise web applications which digitize business processes currently used to build the Global, Q Series, C Series, and Lear aircraft.</p>
                            </div>
                            <div className="work__item">
                                <div className="work__title">
                                    <span>Freelance Web Developer</span>
                                </div>
                                <time className="work__duration">April 2015 &rarr; Present</time>
                                <p className="work__description">Freelance web development and design work for small-to-medium sized businesses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}