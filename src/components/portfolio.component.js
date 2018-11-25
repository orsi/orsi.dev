import React, { Component } from 'react';
import './portfolio.component.css';

const portfolioList = [
    {
        title: 'Humble Roots Media',
        linkHref: 'http://www.humblerootsmedia.com',
        description: '',
        imageSrc: ''
    },
    {
        title: 'Betical',
        linkHref: 'http://screencanadianelit.ca/betical/',
        description: '',
        imageSrc: ''
    },
    {
        title: 'Jo Jo Gun & the Bullets',
        linkHref: 'http://www.jojogun.ca/',
        description: '',
        imageSrc: ''
    }
];

export default class portfolioComponent extends Component {
    render() {
        return(
            <div className="portfolio-component">
            <h1>Portfolio</h1>
                <ul className="portfolio-list">
                    { portfolioList.map((portfolio, i) => {
                        return (
                            <li key={i} className="portfolio-item">
                                <a href={ portfolio.linkHref }>{ portfolio.title }</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}