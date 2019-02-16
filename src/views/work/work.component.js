import React, { Component } from 'react';
import './work.component.css';

const dateOptions = {
    month: 'long',
    year: 'numeric'
};
const workList = [
    {
        company: 'Bombardier Inc.',
        jobTitle: '',
        startDate: new Date(2016, 9),
        endDate: null,
        description: '',
        keywords: [
            'C#',
            '.Net MVC/WebApi/Core',
            'Angular',
            'AngularJS',
            'SASS',
            'Typescript',
            'Bootstrap',
            'jQuery',
            'MS SQL Server',
            'SSIS',
            'NPM',
            'Node.js'
        ]
    },
    {
        company: 'Self-Employed',
        jobTitle: 'Freelance',
        startDate: new Date(2015, 3),
        endDate: null,
        description: 'Freelance web development and design work for small-to-medium sized businesses.',
        keywords: [
            'Wordpress',
            'MySQL',
            'AngularJS',
            'SASS',
            'Shopify',
            'Bootstrap',
            'jQuery',
            'MongoDB',
            'Express',
            'NPM',
            'Node.js',
            'Google Analytics',
            'Instagram/Twitter/Facebook APIs'
        ]
    },
];

export default class WorkComponent extends Component {
    render() {
        return(
            <div className="work-component">
                <div className="row">
                    <div className="col-2">
                        <h2 className="section-title">Work</h2>
                    </div>
                    <div className="col-10">
                        <div className="work-item">
                            <div className="work-item-title">
                                <span>Full Stack Developer @ <strong>Bombardier Inc.</strong></span>
                            </div>
                            <time className="work-item-time">October 2016</time>
                            <p className="work-item-description">Design and develop enterprise web applications which digitize business processes currently used to build the Global, Q Series, C Series, and Lear aircraft.</p>
                        </div>
                        <div className="work-item">
                            <div className="work-item-title">
                                <span>Freelance Web Developer</span>
                            </div>
                            <time className="work-item-time">April 2015</time>
                            <p className="work-item-description">Freelance web development and design work for small-to-medium sized businesses.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}