import React, { Component } from 'react';
import './projects.component.css';
import imageBeticalFull from '../../assets/work-betical-full.jpg';
import imageBeticalMobile from '../../assets/work-betical-mobile.jpg';
import imageHumbleRootsMediaFull from '../../assets/work-humble-roots-media-full.jpg';
import imageHumbleRootsMediaMobile from '../../assets/work-humble-roots-media-mobile.jpg';
import imageZenHtml from '../../assets/zen-html.png';
import imageReverie from '../../assets/reverie.png';

export default class ProjectsComponent extends Component {
    render() {
        return(
            <div className="projects">
                <div className="container">
                    <div className="project-item">
                        <h3>Betical</h3>

                        <div className="project-image-container">
                            <img className="project-image full" alt="Betical" src={imageBeticalFull} />
                            <img className="project-image mobile" alt="Betical" src={imageBeticalMobile} />
                        </div>
                        <p>A born-digital paragraph generator composed with remixed typed assemblage-letters by Dani Spinosa of <a href="https://genericpronoun.com/">Generic Pronoun</a>. Dani came to me with a set of typed letters she had created with the idea of a randomly generated "paragraph". Using the letter images with a combination of javascript and jQuery, Betical generates random combinations of letters into words, and words into paragraphs, to give the impression of a familiar language.</p>
                    </div>

                    <div className="project-item">
                        <span>Humble Roots Media</span>
                        <div className="project-image-container">
                            <img className="project-image full" alt="Humble Roots Media" src={imageHumbleRootsMediaFull} />
                            <img className="project-image mobile" alt="Humble Roots Media" src={imageHumbleRootsMediaMobile} />
                        </div>
                        <p>Humble Roots Media, born from Adrian Miller and Myles Herod, is a digital content creator for businesses and corporations. They wanted a redesign of their website to better reflect their business personality and needed someone who could work with them to implement their vision. Built on Wordpress, I worked with both Adrian and Myles on a new theme template and built an api to deliver and display their beautiful cinemagraphs front and center.</p>
                    </div>

                    <div className="project-item">
                        <span>Zen HTML</span>
                        <div className="project-image-container">
                            <img className="project-image full" alt="zenHTML" src={imageZenHtml} />
                        </div>
                        <p>Zen HTML is a small, quick, and simple library for creating Custom Web Elements through ES5 tagged string literals. Heavily inspired by <a href="https://lit-html.polymer-project.org/">lit-html</a> and <a href="https://viperhtml.js.org/hyper.html">hyperHTML</a>, Zen HTML is a learning project I've built to better understand new Javascript features, npm, custom web elements, and overall project development, maintainance, and publishing.</p>
                    </div>

                    <div className="project-item">
                        <span>Reverie</span>
                        <div className="project-image-container">
                            <img className="project-image full" alt="Reverie" src={imageReverie} />
                        </div>
                        <p>Reverie is an experiment in every sense. Fascinated by procedural generation and emerging properties, Reverie is my attempt at building a world simulation entirely with Node.js and the browser.</p>
                    </div>
                </div>
            </div>
        );
    }
}