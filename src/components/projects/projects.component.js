import React, { Component } from 'react';
import './projects.component.css';
import 'betical';
import imageHumbleRootsMedia from '../../assets/humble-roots-media.png';
import imageZenHtml from '../../assets/zen-html.png';
import imageReverie from '../../assets/reverie.png';

export class ProjectsComponent extends Component {
    render() {
        return (
            <div className="projects">
                <div className="container">
                    <h2>Projects</h2>

                    <div className="project project--betical">

                        <h4><a href="http://screencanadianelit.ca/betical/generate_one/">Betical</a></h4>
                        <div className="project-description">
                            <p>A born-digital paragraph generator composed with remixed typed assemblage-letters by Dani Spinosa of <a href="https://genericpronoun.com/">Generic Pronoun</a> and myself. Using Dani's letters with a combination of javascript and jQuery, Betical generates random combinations of letters into words, and words into paragraphs, to give the impression of a familiar language.</p>
                        </div>
                        <div className="project-image-container">
                            <bet-ical></bet-ical>
                        </div>

                    </div>

                    <div className="project project--zen-html">
                        <h4><a href="http://github.com/jorsi/zen-html">Zen HTML</a></h4>
                        <div className="project-description">
                            <p>Heavily inspired by <a href="https://lit-html.polymer-project.org/">lit-html</a> and <a href="https://viperhtml.js.org/hyper.html">hyperHTML</a>, Zen HTML is a small, quick, and simple library for creating Custom Web Elements through ES5 tagged string literals.  I built this as a learning project to better understand custom web elements and project publishing on npm.</p>
                        </div>
                    </div>

                    <div className="project project--reverie">
                        <h4><a href="http://github.com/jorsi/reverie">Reverie</a></h4>
                        <div className="project-description">
                            <p>Reverie is a disc-world generator written with Nodejs. After being fascinated by the immense complexity of <a href="http://www.bay12games.com/dwarves/">Dwarf Fortress</a>, I wanted to experiment with world generation myself.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}