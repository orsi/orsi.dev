import './projects.scss';
import React, { Component } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import imageDeno from '../../assets/deno-logo.svg';
import imageBetical from '../../assets/project-betical.jpg';
import imageCodeX from '../../assets/project-code-x.jpg';
import imageHumbleRootsMedia from '../../assets/project-humble-roots-media.gif';

export class ProjectsComponent extends Component {
    render() {
        return (
            <div className="projects">
                <div className="project code-x">
                    <div className="container">
                        <div className="sm-flex row-reverse">
                            <div className="project-media">

                                <div className="project-image">
                                    <img src={imageCodeX}></img>
                                </div>

                            </div>
                            <div className="project-content">

                                <h4 className="project-title">
                                    Code X
                                </h4>
                                <div className="project-description">
                                    <p>An interactive exploration of text, image and sound. Conceptualized in 1999 during a residency at the Visual Studies Workshop in Rochester, New York by <a href="https://www.wmarksutherland.com/code-x" target="_blank">W. Mark Sutherland</a>. Orginally coded in Adobe Flash, Mark reached out to develop a newer version of Code X built with supported technology. I recreated Code X for the browser using the Web Audio API.</p>
                                </div>

                                <div className="mt-16">
                                    <a href="https://code-x.live"
                                        target="_blank"
                                        className="project-button">
                                        <span className="box"></span>
                                        <span className="arrow">
                                            <FaArrowRight></FaArrowRight>
                                        </span>
                                        <span className="text">experiment with code x</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="project deno">
                    <div className="container">
                        <div className="sm-flex">
                            <div className="project-media">

                                <div className="project-image">
                                    <img src={imageDeno} />
                                </div>

                            </div>
                            <div className="project-content">

                                <h4 className="project-title">Deno</h4>
                                <div className="project-description">
                                    <p><a href="https://deno.land/" target="_blank">Deno</a> is a JavaScript/TypeScript runtime built on V8, Rust, and Tokio. Deno aims to be a productive and secure scripting environment for the modern programmer from the creator of NodeJS, Ryan Dahl. I initiated the <a href="https://github.com/denoland/deno/commits?author=jorsi" target="_blank">Rust and Typescript TLS features</a>.</p>
                                </div>

                                <div className="mt-16">
                                    <a href="https://deno.land"
                                        target="_blank"
                                        className="project-button">
                                        <span className="box"></span>
                                        <span className="arrow">
                                            <FaArrowRight></FaArrowRight>
                                        </span>
                                        <span className="text">check out the Deno project</span>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="project betical">
                    <div className="container">
                        <div className="sm-flex row-reverse">
                            <div className="project-media">

                                <div className="project-image">
                                    <img src={imageBetical} />
                                </div>

                            </div>
                            <div className="project-content">

                                <h4 className="project-title">Betical</h4>
                                <div className="project-description">
                                    <p>A born-digital paragraph generator composed with remixed typed assemblage-letters by Dani Spinosa of <a href="https://genericpronoun.com/" target="_blank">Generic Pronoun</a>. A randomly generated combination of letters turn into words, words into paragraphs, and the reader is left with the impression of a familiar language.</p>
                                </div>

                                <div className="mt-16">
                                    <a href="https://jonorsi.com/betical"
                                        target="_blank"
                                        className="project-button">
                                        <span className="box"></span>
                                        <span className="arrow">
                                            <FaArrowRight></FaArrowRight>
                                        </span>
                                        <span className="text">experience betical</span>
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="project humble-roots-media">
                    <div className="container">
                            <div className="project-media">

                                <div className="project-image">
                                    <img src={imageHumbleRootsMedia} />
                                </div>

                            </div>
                            <div className="project-content">

                                <h4 className="project-title">Humble Roots Media</h4>
                                <div className="project-description">
                                    <p>A digital content creator for businesses and corporations. They wanted a redesign of their website to better reflect their business personality and needed someone who could work with them to implement their vision. Built on Wordpress, I developed a new theme template and presented their beautiful cinemagraphs front and center.</p>
                                </div>

                                <div className="mt-16">
                                    <a href="https://www.humblerootsmedia.com"
                                        target="_blank"
                                        className="project-button">
                                        <span className="box"></span>
                                        <span className="arrow">
                                            <FaArrowRight></FaArrowRight>
                                        </span>
                                        <span className="text">visit humble roots media</span>
                                    </a>
                                </div>

                            </div>
                    </div>
                </div>
            </div>
        );
    }
}