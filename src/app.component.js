import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.component.css';
import * as FaviconService from './services/favicon.service.js';
import HomeViewComponent from './views/home/home.component.js';
import AboutViewComponent from './views/about/about.component.js';
import WorkViewComponent from './views/work/work.component.js';
import ProjectsViewComponent from './views/projects/projects.component.js';
import ResumeViewComponent from './views/resume/resume.component.js';

class AppComponent extends Component {

  componentDidMount() {
    FaviconService.start();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={HomeViewComponent} />
          <Route exact path="/about" component={AboutViewComponent} />
          <Route exact path="/work" component={WorkViewComponent} />
          <Route exact path="/projects" component={ProjectsViewComponent} />
          <Route exact path="/resume" component={ResumeViewComponent} />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppComponent;
