import './skills.scss';
import React, { Component } from 'react';
import angularImage from '../../assets/angular.png';
import angularJsImage from '../../assets/angularjs.png';
import apacheImage from '../../assets/apache.png';
import babelImage from '../../assets/babel.png';
import bootstrapImage from '../../assets/bootstrap.png';
import clangImage from '../../assets/clang.png';
import entityFrameworkImage from '../../assets/entity-framework.png';
import eslintImage from '../../assets/eslint.png';
import expressImage from '../../assets/express.png';
import gitImage from '../../assets/git.png';
import illustratorImage from '../../assets/illustrator.png';
import jqueryImage from '../../assets/jquery.png';
import kendoUiImage from '../../assets/kendo-ui.png';
import linuxImage from '../../assets/linux.png';
import materialImage from '../../assets/material.png';
import mongoDbImage from '../../assets/mongodb.png';
import mongooseImage from '../../assets/mongoose.png';
import msSqlServerImage from '../../assets/mssqlserver.png';
import mySqlImage from '../../assets/mysql.png';
import netCoreImage from '../../assets/netcore.png';
import netMvcImage from '../../assets/netmvc.png';
import netWebApiImage from '../../assets/netwebapi.png';
import nginxImage from '../../assets/nginx.png';
import npmImage from '../../assets/npm.png';
import photoshopImage from '../../assets/photoshop.png';
import phpImage from '../../assets/php.png';
import pythonImage from '../../assets/python.png';
import reactImage from '../../assets/react.png';
import rustImage from '../../assets/rust.png';
import rxjsImage from '../../assets/rxjs.png';
import sassImage from '../../assets/sass.png';
import sketchImage from '../../assets/sketch.png';
import socketioImage from '../../assets/socketio.png';
import squarespaceImage from '../../assets/squarespace.png';
import swiftImage from '../../assets/swift.png';
import typescriptImage from '../../assets/typescript.png';
import webpackImage from '../../assets/webpack.png';
import wordpressImage from '../../assets/wordpress.png';
import xdImage from '../../assets/xd.png';

export class SkillsComponent extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div id="skills">

                <div className="container">

                    <h2 className="section-title">Skills</h2>

                    <div className="skills-container">
                        <h4 className="skills-title">C#</h4>
                        <ul className="skills-list">
                            <li className="skills-list-item">
                                <img src={msSqlServerImage} 
                                    title="MS Sql Server"
                                    alt="MS Sql Server" />
                                <span className="sr-only">MS Sql Server</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={netMvcImage} 
                                    title=".NET MVC"
                                    alt=".NET MVC" />
                                <span className="sr-only">.NET MVC</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={netWebApiImage} 
                                    title=".NET Web API"
                                    alt=".NET Web API" />
                                <span className="sr-only">.NET Web API</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={netCoreImage}
                                    title=".NET Core"
                                    alt=".NET Core" />
                                <span className="sr-only">.NET Core</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={entityFrameworkImage} 
                                    title="Entity Framework"
                                    alt="Entity Framework" />
                                <span className="sr-only">Entity Framework</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={kendoUiImage} 
                                    title="Kendo UI"
                                    alt="Kendo UI" />
                                <span className="sr-only">Kendo UI</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills-container">
                        <h4 className="skills-title">HTML/CSS/JS</h4>
                        <ul className="skills-list">
                            <li className="skills-list-item">
                                <img src={jqueryImage} 
                                    title="jQuery"
                                    alt="jQuery" />
                                <span className="sr-only">jQuery</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={reactImage} 
                                    title="React"
                                    alt="React" />
                                <span className="sr-only">React</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={eslintImage} 
                                    title="ESLint"
                                    alt="ESLint" />
                                <span className="sr-only">ESLint</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={angularJsImage} 
                                    title="AngularJS"
                                    alt="AngularJS" />
                                <span className="sr-only">AngularJS</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={angularImage} 
                                    title="Angular"
                                    alt="Angular" />
                                <span className="sr-only">Angular</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={typescriptImage} 
                                    title="TypeScript"
                                    alt="TypeScript" />
                                <span className="sr-only">TypeScript</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={rxjsImage} 
                                    title="RxJs"
                                    alt="RxJs" />
                                <span className="sr-only">RxJs</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={bootstrapImage} 
                                    title="BootStrap"
                                    alt="BootStrap" />
                                <span className="sr-only">BootStrap</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={materialImage} 
                                    title="Material"
                                    alt="Material" />
                                <span className="sr-only">Material</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={sassImage} 
                                    title="SASS"
                                    alt="SASS" />
                                <span className="sr-only">SASS</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills-container">
                        <h4 className="skills-title">NodeJS</h4>
                        <ul className="skills-list">
                            <li className="skills-list-item">
                                <img src={npmImage} 
                                    title="npm"
                                    alt="npm" />
                                <span className="sr-only">npm</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={webpackImage} 
                                    title="Webpack"
                                    alt="Webpack" />
                                <span className="sr-only">Webpack</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={babelImage} 
                                    title="Babel"
                                    alt="Babel" />
                                <span className="sr-only">Babel</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={expressImage} 
                                    title="Express"
                                    alt="Express" />
                                <span className="sr-only">Express</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={socketioImage} 
                                    title="socket.io"
                                    alt="socket.io" />
                                <span className="sr-only">socket.io</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={mongoDbImage} 
                                    title="mongoDB"
                                    alt="mongoDB" />
                                <span className="sr-only">mongoDB</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={mongooseImage} 
                                    title="mongoose"
                                    alt="mongoose" />
                                <span className="sr-only">mongoose</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills-container">
                        <h4 className="skills-title">Design</h4>
                        <ul className="skills-list">
                            <li className="skills-list-item">
                                <img src={illustratorImage} 
                                    title="Adobe Illustrator"
                                    alt="Adobe Illustrator" />
                                <span className="sr-only">Adobe Illustrator</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={photoshopImage} 
                                    title="Adobe Photoshop"
                                    alt="Adobe Photoshop" />
                                <span className="sr-only">Adobe Photoshop</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={xdImage} 
                                    title="Adobe XD"
                                    alt="Adobe XD" />
                                <span className="sr-only">Adobe XD</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={sketchImage} 
                                    title="Sketch"
                                    alt="Sketch" />
                                <span className="sr-only">Sketch</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills-container">
                        <h4 className="skills-title">Devops</h4>
                        <ul className="skills-list">
                            <li className="skills-list-item">
                                <img src={linuxImage} 
                                    title="Linux"
                                    alt="Linux" />
                                <span className="sr-only">Linux</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={apacheImage} 
                                    title="Apache"
                                    alt="Apache" />
                                <span className="sr-only">Apache</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={nginxImage} 
                                    title="NGINX"
                                    alt="NGINX" />
                                <span className="sr-only">NGINX</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={gitImage} 
                                    title="git"
                                    alt="git" />
                                <span className="sr-only">git</span>
                            </li>
                        </ul>
                    </div>
                    <div className="skills-container">
                        <h4 className="skills-title">
                            <span>Other</span>
                            <small className="small">Familiar</small>
                        </h4>
                        <ul className="skills-list">
                            <li className="skills-list-item">
                                <img src={clangImage} 
                                    title="C"
                                    alt="C" />
                                <span className="sr-only">C</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={pythonImage} 
                                    title="Python"
                                    alt="Python" />
                                <span className="sr-only">Python</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={swiftImage} 
                                    title="Swift"
                                    alt="Swift" />
                                <span className="sr-only">Swift</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={rustImage} 
                                    title="Rust"
                                    alt="Rust" />
                                <span className="sr-only">Rust</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={phpImage} 
                                    title="php"
                                    alt="php" />
                                <span className="sr-only">php</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={wordpressImage} 
                                    title="WordPress"
                                    alt="WordPress" />
                                <span className="sr-only">WordPress</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={mySqlImage} 
                                    title="MySQL"
                                    alt="MySQL" />
                                <span className="sr-only">MySQL</span>
                            </li>
                            <li className="skills-list-item">
                                <img src={squarespaceImage} 
                                    title="Squarespace"
                                    alt="Squarespace" />
                                <span className="sr-only">Squarespace</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}