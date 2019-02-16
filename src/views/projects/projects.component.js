import React, { Component } from 'react';
import './projects.component.css';
import imageBeticalFull from '../../assets/work-betical-full.jpg';
import imageBeticalMobile from '../../assets/work-betical-mobile.jpg';
import imageHumbleRootsMediaFull from '../../assets/work-humble-roots-media-full.jpg';
import imageHumbleRootsMediaMobile from '../../assets/work-humble-roots-media-mobile.jpg';
import imageJoJoGunFull from '../../assets/work-jo-jo-gun-full.jpg';
import imageJoJoGunMobile from '../../assets/work-jo-jo-gun-mobile.jpg';

export default class ProjectsComponent extends Component {
    render() {
        return(
            <div className="project-component">
                <div className="row">
                    <div className="col-2">
                        <h2 className="section-title">Projects</h2>
                    </div>
                    <div className="col-10">

                        <div className="project-item">
                            <a className="project-link" href="">
                                <div className="project-image-container">
                                    <img className="project-image full" alt="" src={ imageBeticalFull } />
                                    <img className="project-image mobile" alt="" src={ imageBeticalMobile } />
                                </div>
                                <span className="project-screen"></span>
                                <span className="project-title">
                                    <span>Betical</span>
                                </span>
                            </a>
                        </div>

                        <div className="project-item">
                            <a className="project-link" href="">
                                <div className="project-image-container">
                                    <img className="project-image full" alt="" src={ imageHumbleRootsMediaFull } />
                                    <img className="project-image mobile" alt="" src={ imageHumbleRootsMediaMobile } />
                                </div>
                                <span className="project-screen"></span>
                                <span className="project-title">
                                    <span>Humble Roots Media</span>
                                </span>
                            </a>
                        </div>

                        <div className="project-item">
                            <a className="project-link" href="">
                                <div className="project-image-container">
                                    <img className="project-image full" alt="" src={ imageJoJoGunFull } />
                                    <img className="project-image mobile" alt="" src={ imageJoJoGunMobile } />
                                </div>
                                <span className="project-screen"></span>
                                <span className="project-title">
                                    <span>Jo Jo Gun & the Bullets</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}