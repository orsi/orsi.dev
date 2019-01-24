import React, { Component } from 'react';
import './projects.component.css';
import imageBeticalFull from '../../assets/work-betical-full.jpg';
import imageBeticalMobile from '../../assets/work-betical-mobile.jpg';
import imageHumbleRootsMediaFull from '../../assets/work-humble-roots-media-full.jpg';
import imageHumbleRootsMediaMobile from '../../assets/work-humble-roots-media-mobile.jpg';
import imageJoJoGunFull from '../../assets/work-jo-jo-gun-full.jpg';
import imageJoJoGunMobile from '../../assets/work-jo-jo-gun-mobile.jpg';

const projectsList = [
    {
        title: 'Humble Roots Media',
        linkHref: 'http://www.humblerootsmedia.com',
        image: imageHumbleRootsMediaFull,
        imageMobile: imageHumbleRootsMediaMobile
    },
    {
        title: 'Betical',
        linkHref: 'http://screencanadianelit.ca/betical/',
        image: imageBeticalFull,
        imageMobile: imageBeticalMobile
    },
    {
        title: 'Jo Jo Gun & the Bullets',
        linkHref: 'http://www.jojogun.ca/',
        image: imageJoJoGunFull,
        imageMobile: imageJoJoGunMobile
    }
];

export default class ProjectsComponent extends Component {
    render() {
        return(
            <div className="project-component">
                <div className="row">
                    <div className="col-2">
                        <h2 className="section-title">Project</h2>
                    </div>
                    <div className="col-10">
                        <ul className="project-list">
                            { projectsList.map((project, i) => {
                                return (
                                    <li key={i} className="project-item">
                                        <a className="project-link" href={ project.linkHref }>
                                            <div className="project-image-container">
                                                <img className="project-image full" alt="" src={ project.image } />
                                                <img className="project-image mobile" alt="" src={ project.imageMobile } />
                                            </div>
                                            <span className="project-screen"></span>
                                            <span className="project-title">
                                                <span>{ project.title }</span>
                                            </span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}