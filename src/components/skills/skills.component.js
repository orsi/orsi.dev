import './skills.component.css';
import React, { Component } from 'react';

export class SkillsComponent extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="skills">
                <div className="skills-container">
                    <h4 className="skills-title">Languages</h4>
                    <ul className="skills-list">
                        <li className="skills-list-item">
                            C#
                        </li>
                        <li className="skills-list-item">
                            Javascript
                        </li>
                        <li className="skills-list-item">
                            Typescript
                        </li>
                        <li className="skills-list-item">
                            Rust
                        </li>
                        <li className="skills-list-item">
                            Python
                        </li>
                        <li className="skills-list-item">
                            Swift
                        </li>
                        <li className="skills-list-item">
                            C
                        </li>
                        <li className="skills-list-item">
                            PHP
                        </li>
                        <li className="skills-list-item">
                            HTML
                        </li>
                    </ul>
                </div>
                <div className="skills-container">
                    <h4 className="skills-title">Frameworks</h4>
                    <ul className="skills-list">
                        <li className="skills-list-item">
                            AngularJS
                        </li>
                        <li className="skills-list-item">
                            Angular
                        </li>
                        <li className="skills-list-item">
                            React
                        </li>
                        <li className="skills-list-item">
                            jQuery
                        </li>
                        <li className="skills-list-item">
                            Express
                        </li>
                        <li className="skills-list-item">
                            Wordpress
                        </li>
                        <li className="skills-list-item">
                            Entity Framework
                        </li>
                        <li className="skills-list-item">
                            ASP.NET MVC
                        </li>
                        <li className="skills-list-item">
                            ASP.NET Web API
                        </li>
                        <li className="skills-list-item">
                            ASP.NET Core
                        </li>
                    </ul>
                </div>
                <div className="skills-container">
                    <h4 className="skills-title">Database</h4>
                    <ul className="skills-list">
                        <li className="skills-list-item">
                            MS SQL Server 2012
                        </li>
                        <li className="skills-list-item">
                            MySQL
                        </li>
                        <li className="skills-list-item">
                            MongoDB
                        </li>
                    </ul>
                </div>
                <div className="skills-container">
                    <h4 className="skills-title">Design</h4>
                    <ul className="skills-list">
                        <li className="skills-list-item">
                            Bootstrap
                        </li>
                        <li className="skills-list-item">
                            Angular Material
                        </li>
                        <li className="skills-list-item">
                            Adobe Photoshop
                        </li>
                        <li className="skills-list-item">
                            Adobe Illustrator
                        </li>
                        <li className="skills-list-item">
                            CSS/SASS
                        </li>
                    </ul>
                </div>
                <div className="skills-container">
                    <h4 className="skills-title">DevOps</h4>
                    <ul className="skills-list">
                        <li className="skills-list-item">
                            NGINX
                        </li>
                        <li className="skills-list-item">
                            Apache
                        </li>
                        <li className="skills-list-item">
                            Linux
                        </li>
                        <li className="skills-list-item">
                            NodeJS
                        </li>
                        <li className="skills-list-item">
                            npm
                        </li>
                        <li className="skills-list-item">
                            git
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}