import React, { Component } from 'react';
import './education.component.css';

const dateOptions = {
    year: 'numeric'
};
const educationList = [
    {
        school: 'George Brown College',
        degree: 'Computer Programmer Analyst',
        startDate: new Date(2014, 8),
        endDate: new Date(2017, 3)
    },
    {
        school: 'University of Toronto',
        degree: 'HBa Philosophy & Latin',
        startDate: new Date(2008, 8),
        endDate: new Date(2013, 3)
    }
];

export default class EducationComponent extends Component {
    render() {
        return(
            <div className="education-component">
                <div className="row">
                    <div className="col-2">
                        <h1 className="section-title">Education</h1>
                    </div>
                    <div className="col-10">
                        <ul className="education-list">
                            { educationList.map((education, i) => {
                                return (
                                    <li key={i} className="education-item">
                                        <div>{ education.school }</div>
                                        <div>{ education.degree }</div>
                                        <time>{ education.startDate.toLocaleDateString('en-US', dateOptions) } - { education.endDate ? education.endDate.toLocaleDateString('en-US', dateOptions) : 'Present' }</time>
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