import React, { Component } from 'react';
import './projects.component.css';
import imageBetical from '../../assets/betical.png';
import imageHumbleRootsMedia from '../../assets/humble-roots-media.jpg';
import imageZenHtml from '../../assets/zen-html.png';
import imageReverie from '../../assets/reverie.png';

export default class ProjectsComponent extends Component {
    render() {
        return (
            <div className="projects">
                <div className="container">

                    <div className="project-item">
                        <div class="row">
                            <div className="column w-m-50">
                                <h3>Betical</h3>
                                <p>A born-digital paragraph generator composed with remixed typed assemblage-letters by Dani Spinosa of <a href="https://genericpronoun.com/">Generic Pronoun</a>. Dani came to me with a set of typed letters she had created with the idea of a randomly generated "paragraph". Using the letter images with a combination of javascript and jQuery, Betical generates random combinations of letters into words, and words into paragraphs, to give the impression of a familiar language.</p>
                            </div>
                            <div className="column w-m-50 flex align-items-center justify-content-center">
                                <img src={imageBetical}
                                     alt="Betical"
                                     className="project__picture" />
                            </div>
                        </div>
                    </div>

                    <div className="project-item">
                        <div className="row">
                            <div className="column w-m-50">
                                <h3>Humble Roots Media</h3>
                                <p>Humble Roots Media, born from Adrian Miller and Myles Herod, is a digital content creator for businesses and corporations. They wanted a redesign of their website to better reflect their business personality and needed someone who could work with them to implement their vision. Built on Wordpress, I worked with both Adrian and Myles on a new theme template and built an api to deliver and display their beautiful cinemagraphs front and center.</p>
                            </div>
                            <div className="column w-m-50 flex align-items-center justify-content-center">
                                <img src={imageHumbleRootsMedia}
                                    alt="Humble Roots Media"
                                    className="project__picture" />
                            </div>
                        </div>

                    </div>

                    <div className="project-item">
                        <div className="row">
                            <div className="column w-m-50">
                                <h3>Zen HTML</h3>
                                <p>Zen HTML is a small, quick, and simple library for creating Custom Web Elements through ES5 tagged string literals. Heavily inspired by <a href="https://lit-html.polymer-project.org/">lit-html</a> and <a href="https://viperhtml.js.org/hyper.html">hyperHTML</a>, Zen HTML is a learning project I've built to better understand new Javascript features, npm, custom web elements, and overall project development, maintainance, and publishing.</p>
                            </div>
                            <div className="column w-m-50 flex align-items-center justify-content-center">
                                <img className="project__picture" alt="zenHTML" src={imageZenHtml} />
                            </div>
                        </div>

                    </div>

                    <div className="project-item">
                        <div className="row">
                            <div className="column w-m-50">
                                <h3>Reverie</h3>
                                <p>Reverie is an experiment in every sense. Fascinated by procedural generation and emerging properties, Reverie is my attempt at building a world simulation entirely with Node.js and the browser.</p>
                            </div>
                            <div className="column w-m-50 flex align-items-center justify-content-center">
                                <img  className="project__picture" alt="Reverie" src={imageReverie} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}