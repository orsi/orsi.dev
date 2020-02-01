import './projects.component.css';
import React, { Component } from 'react';
import imageDeno from '../../assets/deno-logo.svg';
import imageBetical from '../../assets/betical.png';

export class ProjectsComponent extends Component {
    render() {
        return (
            <div className="projects">
                <div className="container">
                    <h2>Projects</h2>

                    <div className="project project--deno">

                        <h4 className="code-x">
                            <span className="black">c</span><span className="red">ode</span> <span className="black">x</span>
                        </h4>
                        <div className="project-description">
                            <p>
                            <a href="https://jonorsi.com/code-x"
                                target="_blank">Code X</a> is an interactive exploration of text, image and sound. Conceptualized in 1999 during a residency at the Visual Studies Workshop in Rochester, New York by <a href="https://www.wmarksutherland.com/code-x" target="_blank">W. Mark Sutherland</a>. Orginally coded in Adobe Flash, Mark reached out to develop a newer version of Code X built with supported technology. I recreated Code X for the browser using the Web Audio API.
                            </p>
                        </div>
                    </div>

                    <div className="project project--deno">

                        <h4>Deno</h4>
                        <div className="project-image-container">
                            <img src={imageDeno}
                                style={ {width: '80px' }}/>
                        </div>
                        <div className="project-description">
                            <p><a href="https://deno.land/" target="_blank">Deno</a> is a JavaScript/TypeScript runtime built on V8, Rust, and Tokio. Deno aims to be a productive and secure scripting environment for the modern programmer from the creator of NodeJS, Ryan Dahl. I initiated the <a href="https://github.com/denoland/deno/commits?author=jorsi" target="_blank">Rust and Typescript TLS features</a>.</p>
                        </div>
                    </div>

                    <div className="project project--betical">

                        <h4>Betical</h4>
                        <div className="project-image-container">
                            <img src={imageBetical}
                                style={ {width: '80px' }}/>
                        </div>
                        <div className="project-description">
                            <p><a href="https://jonorsi.com/betical" target="_blank">Betical</a> is born-digital paragraph generator composed with remixed typed assemblage-letters by Dani Spinosa of <a href="https://genericpronoun.com/" target="_blank">Generic Pronoun</a>. A randomly generated combination of letters turn into words, words into paragraphs, and the reader is left with the impression of a familiar language.</p>
                        </div>
                        {/* <div className="project-image-container">
                            <bet-ical></bet-ical>
                        </div> */}

                    </div>
{/* 
                    <div className="project project--zen-html">
                        <h4><a href="http://github.com/jorsi/zen-html" target="_blank">Zen HTML</a></h4>
                        <div className="project-description">
                            <p>Heavily inspired by <a href="https://lit-html.polymer-project.org/">lit-html</a> and <a href="https://viperhtml.js.org/hyper.html">hyperHTML</a>, Zen HTML is a small, quick, and simple library for creating Custom Web Elements through ES5 tagged string literals.  I built this as a learning project to better understand custom web elements and project publishing on npm.</p>
                        </div>
                    </div>

                    <div className="project project--reverie">
                        <h4><a href="http://github.com/jorsi/reverie" target="_blank">Reverie</a></h4>
                        <div className="project-description">
                            <p>Reverie is a disc-world generator written with Nodejs. After being fascinated by the immense complexity of <a href="http://www.bay12games.com/dwarves/">Dwarf Fortress</a>, I wanted to experiment with world generation myself.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}