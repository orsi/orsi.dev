import React, { Component } from 'react';
import './work.component.css';

const dateOptions = {
    month: 'long',
    year: 'numeric'
};
const workList = [
    {
        company: 'Bombardier Inc.',
        jobTitle: 'Full Stack Developer',
        startDate: new Date(2016, 9),
        endDate: null,
        description: 'Design, develop, and maintain enterprise-level web applications for Bombardier quality and production teams.',
        keywords: [
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
                        <h1 className="section-title">Work</h1>
                    </div>
                    <div className="col-10">
                        <ul className="work-list">
                            { workList.map((work, i) => {
                                return (
                                    <li key={i} className="work-item">
                                        <div className="work-item-title">
                                            <span>{ work.jobTitle }</span> @ <span><strong>{ work.company }</strong></span>
                                        </div>
                                        <time>{ work.startDate.toLocaleDateString('en-US', dateOptions) } - { work.endDate ? work.endDate.toLocaleDateString('en-US', dateOptions) : 'Present' }</time>
                                        <p>{ work.description }</p>
                                        <ul className="keyword-list">
                                            { work.keywords.map((keyword, i) => <li key={i} className="keyword-list-item">{ keyword }</li>) }
                                        </ul>
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