import React, { Component } from 'react';
import './portfolio.component.css';
import imageBeticalFull from '../assets/work-betical-full.jpg';
import imageBeticalMobile from '../assets/work-betical-mobile.jpg';
import imageHumbleRootsMediaFull from '../assets/work-humble-roots-media-full.jpg';
import imageHumbleRootsMediaMobile from '../assets/work-humble-roots-media-mobile.jpg';
import imageJoJoGunFull from '../assets/work-jo-jo-gun-full.jpg';
import imageJoJoGunMobile from '../assets/work-jo-jo-gun-mobile.jpg';

const portfolioList = [
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

export default class PortfolioComponent extends Component {
    render() {
        return(
            <div className="portfolio-component">
                <div className="row">
                    <div className="col-2">
                        <h2 className="section-title">Portfolio</h2>
                    </div>
                    <div className="col-10">
                        <ul className="portfolio-list">
                            { portfolioList.map((portfolio, i) => {
                                return (
                                    <li key={i} className="portfolio-item">
                                        <a className="portfolio-link" href={ portfolio.linkHref }>
                                            <div className="portfolio-image-container">
                                                <img className="portfolio-image full" src={ portfolio.image } />
                                                <img className="portfolio-image mobile" src={ portfolio.imageMobile } />
                                            </div>
                                            <span className="portfolio-screen"></span>
                                            <span className="portfolio-title">
                                                <span>{ portfolio.title }</span>
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